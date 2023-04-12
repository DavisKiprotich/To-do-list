import React from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import style from './styles/modules/app.module.scss';

import './App.css';

function App() {
  return (
    <div className="container">
    <PageTitle>TODO LIST</PageTitle>
    <div className={style.app__wrapper}>
    <AppHeader />
    </div>
    </div>
  );
}

export default App;
