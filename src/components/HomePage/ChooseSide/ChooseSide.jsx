import PropTypes, { string } from 'prop-types';
import styles from './ChooseSide.module.css';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import cs from 'classnames';
import imgDarkSide from './img/dark-side.jpg';
import imgLightSide from './img/light-side.jpg';
import imgFalcon from './img/falcon.jpg';

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div className={cs(styles.item, classes)} onClick={()=> isTheme.change(theme)} >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
}
 
const ChooseSide = () => {
   
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: 'I am Han Solo',
      img: imgFalcon,
      classes: styles.item__neutral,
    },
  ]

   return (
    <div className={styles.container}>
      {elements.map( ({ theme, text, img, classes }, index) => (
        <ChooseSideItem 
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>)
};


ChooseSideItem.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}

export default ChooseSide;