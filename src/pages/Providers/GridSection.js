import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

const GridSection = ({ state }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {state &&
        state
          .sort((a, b) => a.providerName.localeCompare(b.providerName))
          .map((item, index) => (
            <div key={index} className="box">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 15, marginBottom: 10 }}>
                  {item.logo ? (
                    <img
                      style={{ height: 130, width: 130, borderRadius: '50%' }}
                      src={item.logo}
                      alt=""
                    />
                  ) : (
                    <div
                      style={{
                        height: 120,
                        width: 120,
                        backgroundColor: 'cornsilk',
                        borderRadius: '50%',
                      }}
                    />
                  )}

                  <div style={{ marginBottom: 25 }}>
                    <h3 style={{ marginBottom: 5 }}>
                      <strong>{item.providerName}</strong>
                    </h3>
                    <p className="providerType">{item.providerType}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div className="strongLabel">Branches:</div>
                      <p style={{ marginBottom: 0 }}>{item.branch ? item.branch?.length : 0}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div className="strongLabel">Contact:</div>
                      <p style={{ marginBottom: 0 }}>{item.providerContactNumber}</p>
                    </div>
                    <div style={{ marginBottom: 0 }}>
                      <span style={{ marginRight: 5 }} className="strongLabel">
                        Address:
                      </span>
                      {item.providerAddress}
                    </div>
                  </div>
                </div>

                <Button
                  style={{ textTransform: 'capitalize', cursor: 'default' }}
                  type={item.status.toLowerCase() === 'active' ? 'primary' : 'danger'}
                  shape="round"
                >
                  {item.status}
                </Button>
              </div>

              <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
                <Button
                  onClick={() => navigate(`/${item.id}`, { state: item })}
                  size="large"
                  type=""
                  style={{ width: '90%' }}
                >
                  View Detail
                </Button>
                <Button
                  type="primary"
                  onClick={() =>
                    navigate(`/addbranch/${item.id}`, {
                      state: {
                        branches: item.branch ? item.branch : [],
                        providerName: item.providerName,
                      },
                    })
                  }
                  size="large"
                  style={{ width: '90%' }}
                >
                  Add Branch
                </Button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default GridSection;
