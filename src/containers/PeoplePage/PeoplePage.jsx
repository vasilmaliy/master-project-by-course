import { useState, useEffect } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import PropTypes from 'prop-types';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  
  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResourse = async ( url ) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
  
        return {
          id,
          name, 
          img
        }
      })
  
      setPeople(peopleList); 
      setPrevPage(res.previous);
      setNextPage(res.next);
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }

  }

  useEffect(() => {
    getResourse(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResourse={getResourse}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people}/>}
    </>
  )
}

PeoplePage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);