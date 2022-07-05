import React from 'react';
import Main from '../../layout/Main';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button, Divider } from 'antd';

const Index = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Main pageName="Dashboard">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 10 }}>
            <AiOutlineArrowLeft size={30} style={{ marginBottom: 5, color: 'gray' }} />
            <h2 className={styles.pageTitle}>{state.providerName}</h2>
          </Link>
        </div>

        <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
            {state.logo ? (
              <img style={{ height: 100, width: 100, borderRadius: 50 }} src={state.logo} alt="" />
            ) : (
              <div
                style={{ height: 100, width: 100, backgroundColor: 'cornsilk', borderRadius: 50 }}
              />
            )}
            <div>
              <h3 style={{ marginBottom: 5 }}>{state.providerName}</h3>
              <p style={{ marginBottom: 0 }}>Type: {state.providerType}</p>
              <p style={{ marginBottom: 0 }}>Branches: {state.branch ? state.branch?.length : 0}</p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            <Button
              disabled
              onClick={() => navigate(`/${state.id}`, { state: state })}
              size="large"
              type=""
              style={{ width: '90%' }}
            >
              Edit
            </Button>
            <Button
              type="primary"
              onClick={() =>
                navigate(`/addbranch/${state.id}`, {
                  state: {
                    branches: state.branch ? state.branch : [],
                    providerName: state.providerName,
                  },
                })
              }
              size="large"
              style={{ width: '90%' }}
            >
              Add branch
            </Button>
          </div>
          <p className={styles.itemLabel}>
            Status: <span style={{ fontWeight: 'normal' }}>{state.status}</span>{' '}
          </p>
          <p className={styles.itemLabel}>
            Contact Number:{' '}
            <span style={{ fontWeight: 'normal' }}>{state.providerContactNumber}</span>{' '}
          </p>
          <p className={styles.itemLabel}>
            Services: <a href={state.document}>{state.document}</a>{' '}
          </p>
          <p className={styles.itemLabel}>
            Contract: <a href={state?.contractFile}>{state?.contractFile}</a>{' '}
          </p>
          <div>
            <h4>Admin Details</h4>
            <p style={{ marginBottom: 5 }}>Name: {state.superAdminName}</p>
            <p>Email: {state.superAdminEmail}</p>
          </div>
          <h4>Address</h4>
          <p style={{ marginBottom: 2 }}> Country : {state?.country}</p>
          <p style={{ marginBottom: 2 }}> City : {state?.city}</p>
          <p style={{ marginBottom: 2 }}> Zip code : {state?.zip}</p>
          <p style={{ marginBottom: 2 }}>Address line 1: {state?.addressLineOne}</p>

          <p>{state.providerAddress}</p>
          {state.branch?.length > 0 && (
            <>
              <Divider />
              <h4>Branch Details</h4>
              <div className={styles.wrapper}>
                {state.branch.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#d8f0db',
                      padding: 20,
                      position: 'relative',
                      borderRadius: 10,
                    }}
                  >
                    <p className={styles.itemLabel}>
                      Branch Name:
                      {item.branchName && (
                        <span style={{ fontWeight: 'normal' }}>{item.branchName}</span>
                      )}
                    </p>
                    <p className={styles.itemLabel}>
                      {' '}
                      Branch Admin Name:
                      <span style={{ fontWeight: 'normal' }}>{item.branchAdminName}</span>{' '}
                    </p>
                    <p className={styles.itemLabel}>
                      Branch Admin Email:
                      <span style={{ fontWeight: 'normal' }}>{item.branchAdminEmail}</span>
                    </p>
                    <p className={styles.itemLabel}>
                      Branch Contact Number:
                      <span style={{ fontWeight: 'normal' }}>{item.branchContactNumber}</span>{' '}
                    </p>
                    <p className={styles.itemLabel}>
                      Name Of Beneficiary:
                      <span style={{ fontWeight: 'normal' }}>{item.nameOfBeneficiary}</span>{' '}
                    </p>
                    <p className={styles.itemLabel}>
                      Name Of AccountNumber:
                      <span style={{ fontWeight: 'normal' }}>{item.accountNumber}</span>{' '}
                    </p>
                    <p className={styles.itemLabel}>
                      Swift Code:
                      <span style={{ fontWeight: 'normal' }}>{item.swiftCode}</span>{' '}
                    </p>
                    <p className={styles.itemLabel}>
                      Bank Name:
                      <span style={{ fontWeight: 'normal' }}>{item.bankName}</span>{' '}
                    </p>
                    {item.users?.map((item, index) => (
                      <div key={index}>
                        <p className={styles.itemLabel}>
                          User email:
                          <span style={{ fontWeight: 'normal' }}>{item.userEmail}</span>{' '}
                        </p>
                        <p className={styles.itemLabel}>
                          User role:
                          <span style={{ fontWeight: 'normal' }}>{item.userRole}</span>{' '}
                        </p>
                      </div>
                    ))}

                    <p className={styles.itemLabel}>
                      Branch Address:
                      <span style={{ fontWeight: 'normal' }}>{item.branchAddress}</span>
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Index;
