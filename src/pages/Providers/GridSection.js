import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';

const GridSection = ({ state }) => {
  return (
    <div className={styles.wrapper}>
      {state &&
        state.map((item, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
              <div
                style={{ height: 120, width: 120, backgroundColor: 'cornsilk', borderRadius: 60 }}
              />
              <div>
                <h3 style={{ marginBottom: 5 }}>Service provider </h3>
                <p style={{ marginBottom: 0 }}>Type: Hospital</p>
                <p style={{ marginBottom: 0 }}>Branches: No</p>
              </div>
            </div>
            <h4>Address</h4>
            <p>Lorem ck ewcnij ewnf njnewijcn weincjei wnfciew jnijewicnw ehcw jknnjnojn</p>
            <div style={{ display: 'flex', gap: 20 }}>
              <Button size="large" type="" style={{ width: '90%' }}>
                Edit
              </Button>
              <Button size="large" type="" style={{ width: '90%' }}>
                Add branch
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GridSection;
