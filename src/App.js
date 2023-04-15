import React from 'react';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';

import './App.css';

function App() {
  return (
    <div className="container">
    <PageTitle>TODO LIST</PageTitle>
    <div className={styles.app__wrapper}><AppHeader /></div>
    </div>
  );
}

export default App;
