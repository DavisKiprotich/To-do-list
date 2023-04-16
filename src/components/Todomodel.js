import React from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'

function Todomodel() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.closeButton}>
                <MdOutlineClose/>
            </div>
            <form className={styles.form}>
                <h1 className={styles.formTitle}>Add Task</h1>
                <label htmlFor='title'>
                    Title
                    <input type='text' id='title' />
                </label>   
                <label htmlFor='status'>
                    Status
                    <input type='status' id='status' />
                </label>   
            </form>
        </div>
    </div>
  )
}

export default Todomodel