/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Input, Card, Avatar } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import Table from './Table';
import GridSection from './GridSection';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Index = () => {
  const [state, setState] = useState();
  const providersCollectionref = collection(firestore, 'providers');

  useEffect(() => {
    async function getData() {
      getDocs(providersCollectionref)
      .then((snap) => {
        let providers = []
        snap.forEach(doc => {
          providers.push({...doc.data(), id: doc.id})
        })
        setState(providers)
      })
    }
    getData();
  }, []);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  console.log('state',state)

  const onSearch = (value) => console.log(value);

  return (
    <Main pageName="Providers">
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <Search
            size="large"
            placeholder="Search providers"
            onSearch={onSearch}
            enterButton
            allowClear
            className={styles.search}
          />

          <Link to='/onboard' className={styles.addBox}>
            <img src="/icons/plusSign.webp" style={{ height: 35 }} alt="" />
            <div className={styles.whiteBox}>New Provider</div>
          </Link>
          </div>
       
          <GridSection state={state} />
      </div>
    </Main>
  );
};

export default Index;
