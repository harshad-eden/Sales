import { Layout } from 'antd';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const HeaderComponenet = ({ pageName }) => {
  const { Header: AntHeader } = Layout;
  return (
    <AntHeader style={{ backgroundColor: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <FaUser size={20} style={{ marginTop: 10 }} />
      </div>
    </AntHeader>
  );
};

export default HeaderComponenet;
