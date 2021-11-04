import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite} from '@store/actions';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople= () => {
    if(personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);

    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }));
      setPersonFavorite(true);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName}/>
        <img 
        className={styles.favorite}
        src={personFavorite ?  iconFavoriteFill : iconFavorite}
        onClick={dispatchFavoritePeople}
        alt="add to favorite"
        />
      </div> 
    </>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}


export default PersonPhoto;