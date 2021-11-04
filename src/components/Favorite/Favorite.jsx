import styles from './Favorite.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const [count, setCount] = useState();
  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
    
  });

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="favorites"/>
      </Link>
    </div>
  )
}

export default Favorite;