import { Button } from 'antd';
import React from 'react';

const ColumnItem = ({ imgs }) => {
  return imgs.map((item, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        width: '33%',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            marginBottom: 5,
            fontSize: 12,
            lineHeight: 0,
            color: '#020202',
            fontWeight: 600,
            marginTop: 4,
          }}
        >
          {item.title}
        </p>

        <p style={{ fontWeight: 800, fontSize: 26, marginBottom: 0 }}>{item.count}</p>
      </div>
    </div>
  ));
};

export default ColumnItem;
