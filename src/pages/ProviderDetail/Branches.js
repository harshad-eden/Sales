import React from 'react';
import Main from '../../layout/Main';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { Button, Divider } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const Branches = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <Divider />
      <h4>Branch Details</h4>
      <div className={styles.wrapper}>
        {data.branch.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#d8f0db',
              padding: 20,
              position: 'relative',
              borderRadius: 10,
            }}
          >
            <div style={{ position: 'absolute', right: 10, top: 10 }}>
              <Button
                onClick={() => navigate(`/editbranch/${item.uuid}`, { state: { item, data } })}
                type="dashed"
                size="small"
                shape="round"
                icon={<EditOutlined />}
              >
                Edit
              </Button>
            </div>

            <p className={styles.itemLabel}>
              Name:
              {item.branchName && (
                <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.branchName}</span>
              )}
            </p>
            <p className={styles.itemLabel}>
              Type:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.branchType}</span>
            </p>
            <p className={styles.itemLabel}>
              Status:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.status}</span>
            </p>

            <div className={styles.itemLabel}>
              Contact:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.contactNumber}</span>
            </div>
            <div className={styles.itemLabel}>
              Contact:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.branchEmail}</span>
            </div>
            <p className={styles.itemLabel}>
              Comment:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.comment}</span>
            </p>

            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 5 }}>
              Payment Details
            </p>
            <p className={styles.itemLabel}>
              Name of beneficiary:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.beneficiaryName}</span>
            </p>
            <p className={styles.itemLabel}>
              Account number:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.accountNumber}</span>
            </p>
            <p className={styles.itemLabel}>
              Swift code:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.swiftCode}</span>
            </p>
            <p className={styles.itemLabel}>
              Bank name:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.bankName}</span>
            </p>
            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 5 }}>
              User Details
            </p>
            <p className={styles.itemLabel}>
              Admin name:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.adminName}</span>
            </p>
            <p className={styles.itemLabel}>
              Admin email:
              <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.adminEmail}</span>
            </p>
            {item.users?.map((item, index) => (
              <div key={index}>
                <p className={styles.itemLabel}>
                  User email:
                  <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.userEmail}</span>
                </p>
                <p className={styles.itemLabel}>
                  User role:
                  <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.userRole}</span>
                </p>
              </div>
            ))}
            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 5 }}>
              Address Details
            </p>

            <div>
              <p style={{ marginBottom: 2 }}> Country : {item?.country}</p>
              <p style={{ marginBottom: 2 }}> City : {item?.city}</p>
              <p style={{ marginBottom: 2 }}> Zip code : {item?.zip}</p>

              <p className={styles.itemLabel}>
                Branch Address:
                <span style={{ fontWeight: 'normal' }}>{item.branchAddress}</span>
              </p>
            </div>

            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 5 }}>Comment</p>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Branches;
