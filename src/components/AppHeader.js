import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import Todomodel from './Todomodel';

function AppHeader() {
  const [ modelOpen, setModelOpen ] = useState(false);
  return (
    <div className={styles.appHeader}>
    <Button variant="primary" onClick={() => setModelOpen(true)}>Add Task</Button>
    <SelectButton id='status'>
      <option value='open'>OPEN</option>
      <option value='working'>WORKING</option>
      <option value='done'>DONE</option>
      <option value='overdue'>OVERDUE</option>
    </SelectButton>
    <Todomodel modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
    
  )
}

export default AppHeader