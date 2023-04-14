// eslint-disable-next-line
import React , { children }from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utilities/getClasses'


const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary',
};

function Button({ children, type ,variant, ...rest }) {
  return (
    <button className={getClasses({ [styles.button, styles[`button--${buttonTypes[variant]}`]
  ] })} 
    type={type === 'submit' ? 'submit' : 'button'} {...rest}>{ children }</button>
  )
}

function SelectButton({ children, ...rest }){
  return (
    <select className={getClasses({[styles.button, styles.button__select]})} {...rest}>{children}</select>
  )
}

export default Button