/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { collection, getDoc } from 'firebase/firestore';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../../firebase';
import Main from '../../layout/Main';
import styles from './index.module.css';
import ColumnItem from './ColumnItem';
import GridSection from './GridSection';
import { loadProviders } from '../../store/providerSlice';

const { Search } = Input;

const Index = () => {
  const dispatch = useDispatch();
  // const [state, setState] = useState([]);
  const [tempState, setTempState] = useState();
  const providersCollectionref = collection(firestore, 'providers');

  const [...state] = useSelector((state) => state.providers?.data);

  // console.log('data', data);

  useEffect(() => {
    dispatch(loadProviders());
  }, []);

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

  let activeState = state?.filter((item) => item.status === 'active');

  let imgs = [
    {
      img: <AudioOutlined />,
      color: '#f87d4e',
      title: 'Providers',
      count: state && state?.length,
    },
    {
      img: <AudioOutlined />,
      color: '#3ab44d',
      title: 'Active',
      count: activeState && activeState?.length,
    },
    {
      img: <AudioOutlined />,
      color: '#8e3ab4',
      title: 'In-active',
      count: state && state?.length - activeState.length,
    },
  ];

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
        <h3>Summary</h3>
        <div
          style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            width: '100%',
            marginBottom: 40,
          }}
        >
          <ColumnItem imgs={imgs} />
        </div>
        <h3>Providers</h3>
        <GridSection state={tempState ? tempState : state} />
      </div>
    </Main>
  );
};

export default Index;
