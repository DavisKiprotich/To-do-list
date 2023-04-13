import React from 'react';
import style from '../styles/modules/button.module.scss'

function Button({children}) {
  return (
    <button className={style.button} type="button">{ children }</button>
  )
}

export default Button