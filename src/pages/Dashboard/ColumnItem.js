import { Button } from 'antd';
import styles from './index.module.css';
import React from 'react';

const ColumnItem = ({ imgs }) => {
  return imgs.map((item, index) => (
    <div key={index} className={styles.dashboardCol}>
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
