import React from 'react';
import Main from '../../layout/Main';
import { useLocation } from 'react-router-dom';
import styles from './index.module.css';


const Index = () => {
  const {state} = useLocation();
  return (
    <Main pageName="Dashboard">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
        <h2 className={styles.pageTitle}>{state.providerName}</h2>
       </div>
      </div>
    </Main>
  );
};

export default Index;
