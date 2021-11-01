import PropTypes from 'prop-types';
import styles from './PeopleNavigation.module.css';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';

const PeopleNavigation = ({
  getResourse,
  prevPage,
  nextPage,
  counterPage
}) => {

  const handleChamgeNext = () => getResourse(nextPage);
  const handleChamgePrev = () => getResourse(prevPage);

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
        <UiButton  
          text="Previous"
          onClick={handleChamgePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link  to={`/people/?page=${Number(counterPage)+1}`} className={styles.buttons}>
        <UiButton
           text="Next"
           onClick={handleChamgeNext}
           disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResourse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default PeopleNavigation;

