import PropTypes from 'prop-types';
import styles from './PeopleNavigation.module.css';
import { Link } from 'react-router-dom';

const PeopleNavigation = ({
  getResourse,
  prevPage,
  nextPage,
  counterPage
}) => {

  const handleChamgeNext = () => getResourse(nextPage);
  const handleChamgePrev = () => getResourse(prevPage);

  return (
    <>
      <Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
        <button  onClick={handleChamgePrev} disabled={!prevPage} className={styles.button}>Previous</button>
      </Link>
      <Link  to={`/people/?page=${Number(counterPage)+1}`} className={styles.link}>
        <button 
            onClick={handleChamgeNext}
            className={styles.button}
            disabled={!nextPage} 
        >Next
        </button>
      </Link>
    </>
  )
}

PeopleNavigation.propTypes = {
  getResourse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default PeopleNavigation;

