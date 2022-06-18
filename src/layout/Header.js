import { Layout } from 'antd';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const HeaderComponenet = ({ pageName }) => {
  const { Header: AntHeader } = Layout;
  return (
    <AntHeader style={{ backgroundColor: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ color: 'gray' }}>{pageName}</h3>
        <FaUser size={20} />
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
