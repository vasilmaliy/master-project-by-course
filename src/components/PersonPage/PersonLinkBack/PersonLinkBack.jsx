import { useHistory } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.png';

const PersonLinkBack = () => {
  const history = useHistory();

  const handleGoBack = (event) => {
      event.preventDefault();
      history.goBack();
  }

  return (
    <a 
      href="#"
      onClick={handleGoBack}
      className={styles.link}
    >
      <img src={iconBack} className={styles.link__img} alt="go back"/>
      <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack;