/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import GridSection from './GridSection';
import { Link } from 'react-router-dom';

const { Search } = Input;

const Index = () => {
  const [state, setState] = useState();
  const [tempState, setTempState] = useState();
  const providersCollectionref = collection(firestore, 'providers');
  

  useEffect(() => {
    let unsubscribe = getDocs(providersCollectionref).then((snap) => {
      let providers = [];
      snap.forEach((doc) => {
        providers.push({ ...doc.data(), id: doc.id });
      });
      setState(providers);
    });

    return () => unsubscribe
  }, []);

  console.log(state)

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = (value) => {
    if (value) {
      const results = state.filter((item) =>
        item.providerName.replace(/ /g, '').toLowerCase().includes(value.toLowerCase()),
      );
      setTempState(results);
    } else {
      setTempState(null);
    }
  };

  return (
    <Main pageName="Providers">
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <Search
            size="large"
            placeholder="Search providers"
            onChange={(e) => onSearch(e.target.value)}
            enterButton
            allowClear
            className={styles.search}
          />

          <Link to="/onboard" className={styles.addBox}>
            <img src="/icons/plusSign.webp" style={{ height: 35 }} alt="" />
            <div className={styles.whiteBox}>New Provider</div>
          </Link>
        </div>

        <GridSection state={tempState ? tempState : state} />
      </div>
    </Main>
  );
};

export default Index;
