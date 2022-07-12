import React from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

import { useNavigate } from 'react-router-dom';
// import styles from './layout.module.css';

const HeaderComponenet = () => {
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

  let user = localStorage.getItem('user')?.split('@')[0];

  return (
    <div style={{ backgroundColor: 'inherit' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
          <div
            style={{
              textTransform: 'capitalize',
            }}
          >
            {user}
          </div>
        </Dropdown.Button>
      </div>
    </div>
  );
};

export default HeaderComponenet;
