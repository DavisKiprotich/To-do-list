import React , { Children }from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utilities/getClasses';


const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary',
};

function Button({ children, variant = 'primary' }) {
  return (
    <button className={getClasses([styles.button], styles[`button--${buttonTypes[variant]}`])} type="button">{ children }</button>
  )
}

export default Button