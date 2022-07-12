import { Layout } from 'antd';
import React from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message } from 'antd';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import styles from './layout.module.css';

const HeaderComponenet = ({ pageName }) => {
  const { Header: AntHeader } = Layout;
  const navigate = useNavigate();

  const handleMenuClick = async (e) => {
    if (e.key === '2') {
      localStorage.clear();
      navigate('/login');
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Profile',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Logout',
          key: '2',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <div style={{ backgroundColor: 'inherit' }}>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/onboard" className={styles.addBoxMob}>
          <img src="/icons/plusSign.webp" style={{ height: 35 }} alt="" />
          <div className={styles.whiteBoxMob}>New Provider</div>
        </Link>
        <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
          Admin
        </Dropdown.Button>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
          Admin
        </Dropdown.Button>
      </div>
    </div>
  );
};

export default HeaderComponenet;
