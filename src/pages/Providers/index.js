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

const { Search } = Input;

const Index = () => {
  const [state, setState] = useState();
  const providersCollectionref = collection(firestore, 'providers');

  useEffect(() => {
    async function getData() {
      let response = await getDocs(providersCollectionref);
      setState(response.docs.map((item) => item.data()));
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

  const onSearch = (value) => console.log(value);

  return (
    <Main pageName="Providers">
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <Search
            size="large"
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            allowClear
            style={{ width: 304 }}
          />

          <div className={styles.addBox}>
            <img src="/icons/plusSign.webp" style={{ height: 35 }} alt="" />
            <div className={styles.whiteBox}>New Provider</div>
          </div>
        </div>

        <GridSection state={state} />
      </div>
    </Main>
  );
};

export default Index;
