import { Layout } from 'antd';
import React from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message } from 'antd';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

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
    <AntHeader style={{ backgroundColor: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
          Admin
        </Dropdown.Button>
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
