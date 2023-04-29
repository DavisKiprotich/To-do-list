import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import Todomodel from './Todomodel';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  const [ modelOpen, setModelOpen ] = useState(false);
  const filterStatus = useSelector((state) => 
    state.todo.filterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  }

  return (
    <div className={styles.appHeader}>
    <Button variant="primary" onClick={() => setModelOpen(true)}>Add Task</Button>
    <SelectButton id='status' value={filterStatus} onChange={(e)=>updateFilter(e)}>
      <option value='open'>OPEN</option>
      <option value='working'>WORKING</option>
      <option value='done'>DONE</option>
      <option value='overdue'>OVERDUE</option>
    </SelectButton>
    <Todomodel type='add' modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
    
  )
}

export default AppHeader