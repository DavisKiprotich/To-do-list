import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import Button from './Button';
import  { addTodo, updateTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AnimatePresence } from 'framer-motion';

const dropIn = {
    hidden: {
        opacity: 0,
        transform: 'scale(0.9)'
    },
    visible: {
        transform: 'scale(1)',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        transform: 'scale(0.9)',
        opacity: 0,
    },
};

function Todomodel({ type, modelOpen, setModelOpen, todo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [status, setStatus] = useState('open');
    const [deadline, setDeadline] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
    if(type === 'update' && todo){
        setTitle(todo.title);
        setDescription(todo.description);
        setTag(todo.tag);
        setStatus(todo.status)
    }else{
        setTitle('')
        setDescription('')
        setTag('');
        setStatus('open')
    }
    }, [todo, type, modelOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === ''){
            toast.error('Please enter your title');
            return;
        }
        if(title && description && status && deadline){
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
            }
            if(type === 'update'){
                if(todo.title !== title || todo.description !== description || todo.status !== status){
                    dispatch(updateTodo({
                        ...todo,
                        title,
                        description,
                        status,
                    }));
                }else{
                    toast.error('No changes made')
                    return;
                }
            }
            setModelOpen(false);
        }
    }
  return (
    <AnimatePresence>
        {modelOpen && (
            <motion.div className={styles.wrapper} initial={{opacity: 0}} visible={{opacity: 1}} exit={{opacity: 0}}>
                <div className={styles.container} variants={dropIn} initial='initial' visible='visible' exit='exit'>
                    <motion.div className={styles.closeButton}
                    onClick={() => setModelOpen(false)}
                    onKeyDown={() => setModelOpen(false)}
                    tabIndex={0}
                    role='button'
                    initial={{top: 40, opacity: 0}}
                    visible={{top: -10, opacity: 1}}
                    exit={{top: 40, opacity: 0}}
                    >
                        <MdOutlineClose/>
                    </motion.div>
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
            </motion.div>
        )} 
    </AnimatePresence>   
    )
}

export default Todomodel