import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import {AiOutlineFilePdf} from 'react-icons/ai'
import { FilePdfOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const GridSection = ({ state }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      {state &&
        state.map((item, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: 20, maxWidth: 400 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
              {item.logo ? <img style={{height: 100, width: 100, borderRadius: 50}} src={item.logo} alt="" /> : <div
                style={{ height: 100, width: 100, backgroundColor: 'cornsilk', borderRadius: 50 }}
              />}
            
              
              <div>
                <h3 style={{ marginBottom: 5 }}>{item.providerName}</h3>
                <p style={{ marginBottom: 0 }}>Type: {item.providerType}</p>
                <p style={{ marginBottom: 0 }}>Branches: {item.branch.length}</p>
              </div>
            </div>
            <div>
              <h4>Admin</h4>
              <p style={{marginBottom: 5}}>Name: {item.superAdminName}</p>
              <p >Email: {item.superAdminEmail}</p> 
              </div>
            <h4>Address</h4>
            <p>{item.providerAddress}</p>
            {/* <div style={{marginBottom: 20}}>
            <h4>Services</h4>
            <AiOutlineFilePdf size={40} />
            </div> */}
           
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
              <Button onClick={() => navigate(`/providers/:${item.id}`, {state: item})} size="large" type="" style={{ width: '90%' }}>
                View in detail
              </Button>
              <Button type="primary" onClick={() => navigate(`/addbranch/${item.id}`)} size="large" style={{ width: '90%' }}>
                Add branch
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GridSection;
