import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResourse = async (url) => {
    const res = await getApiResource(url);  

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
  }

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return (
    <>
      {people && <PeopleList people={people}/>}
    </>
  )
}

export default PeoplePage;