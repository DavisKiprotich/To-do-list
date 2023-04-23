import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import Button from './Button';
import  { addTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

function Todomodel({ type, modelOpen, setModelOpen }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [status, setStatus] = useState('open');
    const [deadline, setDeadline] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === ''){
            toast.error('Please enter your title')
        }
        if(title && description && tag && status && deadline){
            if(type === 'add'){
                dispatch(addTodo({
                    id: uuid(),
                    title,
                    description,
                    tag,
                    status,
                    deadline: new Date().toLocaleDateString(),
                }));
                toast.success('Task Added Successfully')
                setModelOpen(false);
            }
            if(type === 'update'){
                console.log('updating Task')
            }
        }else{
            toast.error('Fill all the blank spaces')
        }
    }
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
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <h1 className={styles.formTitle}>{type === 'update' ? 'Update' : 'Add'} Task</h1>
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
                        Deadline
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
                        <Button type='submit' variant='primary'>{type === 'update' ? 'Update' : 'Add'} Task</Button>
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