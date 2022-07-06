import React from 'react';
import Main from '../../layout/Main';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

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
              <p style={{ marginBottom: 0 }}>Status: {state.status}</p>
              <p style={{ marginBottom: 0 }}>Contact: {state.providerContactNumber}</p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              marginTop: 15,
              marginBottom: 15,
              width: '100%',
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
          <div>
            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
              Download documents
            </p>

            <div style={{ display: 'flex', gap: 10, marginBottom: 15 }}>
              <a href={state.document}>
                <Button size="small" type="dashed" icon={<DownloadOutlined />}>
                  Services
                </Button>
              </a>

              {state.contractFile && (
                <a href={state?.contractFile}>
                  <Button size="small" type="dashed" icon={<DownloadOutlined />}>
                    Contract
                  </Button>
                </a>
              )}
            </div>

            <div>
              <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
                Admin Details
              </p>

              <p style={{ marginBottom: 5 }}>Name: {state.superAdminName}</p>
              <p>Email: {state.superAdminEmail}</p>
            </div>

            <div>
              <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
                Office user details
              </p>

              <p style={{ marginBottom: 5 }}>Name: {state?.userName}</p>
              <p>Email: {state?.userEmail}</p>
            </div>

            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
              Address Details
            </p>

            <p style={{ marginBottom: 2 }}> Country : {state?.country}</p>
            <p style={{ marginBottom: 2 }}> City : {state?.city}</p>
            <p style={{ marginBottom: 2 }}> Zip code : {state?.zip}</p>
            <p style={{ marginBottom: 2 }}>Address line </p>
            <p>{state.providerAddress}</p>
          </div>

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
                      Name:
                      {item.branchName && (
                        <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
                          {item.branchName}
                        </span>
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

                    <p className={styles.itemLabel}>
                      Contact number:
                      <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
                        {item.contactNumber}
                      </span>
                      <p className={styles.itemLabel}>
                        Comment:
                        <span style={{ fontWeight: 'normal', marginLeft: 5 }}>{item.comment}</span>
                      </p>
                    </p>
                    <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 5 }}>
                      Payment Details
                    </p>
                    <p className={styles.itemLabel}>
                      Name of beneficiary:
                      <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
                        {item.beneficiaryName}
                      </span>
                    </p>
                    <p className={styles.itemLabel}>
                      Account number:
                      <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
                        {item.accountNumber}
                      </span>
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
                          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
                            {item.userEmail}
                          </span>
                        </p>
                        <p className={styles.itemLabel}>
                          User role:
                          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
                            {item.userRole}
                          </span>
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
