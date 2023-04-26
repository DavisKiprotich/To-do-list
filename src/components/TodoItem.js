import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utilities/getClasses';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import TodoModel from './Todomodel';
import { toast } from 'react-hot-toast';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [updateModelOpen, setUpdateModelOpen] = useState(false);

    useEffect(() => {
        if(todo.status === 'done'){
            setChecked(true);
        }else{
            setChecked(false);
        }
    }, [todo.status])

    const handleDelete =() => {
        dispatch(deleteTodo(todo.id));
        toast.success('TODO deleted successfully')
    }
    const handleEdit =() => {
        setUpdateModelOpen(true);
    }
    const handleCheck = () => {
        setChecked(!checked)
        dispatch(updateTodo({
            ...todo,
            status: checked ? 'working' : 'done',
        }))
    };

  return (
    <>
        <div className={styles.item}>
            <div className= {styles.todoDetails}>
                <CheckButton checked ={checked} handleCheck={handleCheck}/>
                <div className={styles.texts}>
                    <p className={getClasses([
                        styles.todoText,
                        todo.status === 'open' && styles['todoText--completed'],
                      ])}>{todo.title}</p>
                    <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.icon} onClick ={handleDelete()}
                onKeyDown={handleDelete()} role='button' tabIndex={0}>
                    <MdDelete/>
                </div>
                <div className={styles.icon} onClick={handleEdit}
                onKeyDown={handleEdit} role='button' tabIndex={0}>
                    <MdEdit />
                </div>
            </div>
        </div>

        <TodoModel type='update' todo={todo} modelOpen={updateModelOpen} setModelOpen ={setUpdateModelOpen}/>
    </>
  )
}

export default TodoItem