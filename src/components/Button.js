import React from 'react';
import styles from '../styles/modules/button.module.scss'

function Button(children) {
  return (
    <button className={styles.button} type='button'>
        {children}
    </button>
  )
}

export default Button