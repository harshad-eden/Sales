import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { FilePdfOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const GridSection = ({ state }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {state &&
        state
          .sort((a, b) => a.providerName.localeCompare(b.providerName))
          .map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: 'white', padding: 20, position: 'relative' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
                {item.logo ? (
                  <img
                    style={{ height: 100, width: 100, borderRadius: 50 }}
                    src={item.logo}
                    alt=""
                  />
                ) : (
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      backgroundColor: 'cornsilk',
                      borderRadius: 50,
                    }}
                  />
                )}

                <div>
                  <h3 style={{ marginBottom: 5 }}>{item.providerName}</h3>
                  <p style={{ marginBottom: 0 }}>Type: {item.providerType}</p>
                  <p style={{ marginBottom: 0 }}>
                    Branches: {item.branch ? item.branch?.length : 0}
                  </p>
                </div>
              </div>
              
              <div>
                <p style={{ marginBottom: 5 }}>Contact Number: {item.providerContactNumber}</p>
              </div>
              <h4>Address</h4>
              <p>{item.providerAddress}</p>
              <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
                <Button
                  onClick={() => navigate(`/${item.id}`, { state: item })}
                  size="large"
                  type=""
                  style={{ width: '90%' }}
                >
                  View in detail
                </Button>
                <Button
                  type="primary"
                  onClick={() =>
                    navigate(`/addbranch/${item.id}`, { state: item.branch ? item.branch : false })
                  }
                  size="large"
                  style={{ width: '90%' }}
                >
                  Add branch
                </Button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default GridSection;
