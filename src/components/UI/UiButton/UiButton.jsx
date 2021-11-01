import PropTypes from 'prop-types';
import '../index.css';
import styles from './UiButton.module.css';
import cn from 'classnames';

const UiButton = ({ 
    text,
    onClick,
    disabled,
    theme='dark',
    classes,
}) => {
  return (
    <button 
        onClick={onClick}
        className={cn(styles.button, styles[theme], classes)}
        disabled={disabled} 
    >{text}
    </button>
  )
}

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
}


export default UiButton;