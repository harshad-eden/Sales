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
        <p className={styles.colText}>{item.title}</p>
        <p className={styles.count}>{item.count}</p>
      </div>
    </div>
  ));
};

export default ColumnItem;
