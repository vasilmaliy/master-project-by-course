import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import styles from './PersonPage.module.css';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@ui/UiLoading';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo ] = useState(null);
  const [personName, setPersonName ] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  
  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      setErrorApi(!res);
      
      if (res) {
        setPersonInfo(
        [
          {title: 'Height', data: res.height},
          {title: 'Mass', data: res.mass},
          {title: 'Birth Year', data: res.birth_year},
          {title: 'Skin Color', data: res.skin_color},
          {title: 'Hair Color', data: res.hair_color},
          {title: 'Eye Color', data: res.eye_color},
          {title: 'Gender', data: res.gender},
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films)
  
      }
    })();

  }, []);

  return (
    <>
      <PersonLinkBack/>
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName}/>
          {personInfo && <PersonInfo personInfo={personInfo}/>}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms}/>
            </Suspense>
          )}
        </div>

      </div>
    </>
  )
}



PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
}


export default withErrorApi(PersonPage);