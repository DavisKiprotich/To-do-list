import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import Button from './Button';

function Todomodel({ modelOpen, setModelOpen }) {
    const [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [status, setStatus] = useState('open');
    let [deadline, setDeadline] = useState('');
    let [tag, setTag] = useState('');
  return (

    modelOpen && (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.closeButton}
                onClick={() => setModelOpen(false)}
                onKeyDown={() => setModelOpen(false)}
                tabIndex={0}
                role='button'
                >
                    <MdOutlineClose/>
                </div>
                <form className={styles.form}>
                    <h1 className={styles.formTitle}>Add Task</h1>
                    <label htmlFor='title'>
                        Title
                        <input type='text' id='title' value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength='100' />
                    </label>   
                    <label htmlFor='description'>
                        Description
                        <input type='text' id='description' value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength='1000' />
                    </label>   
                    <label htmlFor='tag'>
                        Tags
                        <input type='text' id='tag' value={tag}
                        onChange={(e) => setTag(e.target.value)} />
                    </label>   
                    <label htmlFor='deadline'>
                        DEADLINE
                        <input type='date' id='deadline' value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                         />
                    </label>   
                    <label htmlFor='status'>
                        Status
                        <select type='status' id='status' value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value='open'>OPEN</option>
                            <option value='working'>WORKING</option>
                            <option value='done'>DONE</option>
                            <option value='overdue'>OVERDUE</option>
                        </select>
                    </label>  
                    <div className={styles.buttonContainer}>
                        <Button type='submit' variant='primary'>Add Task</Button>
                        <Button type='button' variant='secondary' 
                        onClick={() => setModelOpen(false)}
                        onKeyDown={() => setModelOpen(false)}
                        >Cancel</Button>
                    </div> 
                </form>
            </div>
        </div>
    )    
  )
}

export default Todomodel