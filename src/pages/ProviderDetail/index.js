import React from 'react';
import Main from '../../layout/Main';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Branches from './Branches';

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
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 30,
                marginBottom: 10,
                width: '80%',
              }}
            >
              {state.logo ? (
                <img
                  style={{ height: 100, width: 100, borderRadius: 50, marginLeft: 15 }}
                  src={state.logo}
                  alt=""
                />
              ) : (
                <div
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: 'cornsilk',
                    borderRadius: 50,
                    marginLeft: 15,
                  }}
                />
              )}

              <div>
                <h3 style={{ marginBottom: 5 }}>
                  <strong>{state.providerName}</strong>
                </h3>
                <p className="providerType">{state.providerType}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div className="strongLabel">Branches:</div>
                  <p style={{ marginBottom: 0 }}>{state.branch ? state.branch?.length : 0}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div className="strongLabel">Contact:</div>
                  <p style={{ marginBottom: 0 }}>{state.providerContactNumber}</p>
                </div>
                <div style={{ marginBottom: 0 }}>
                  <span style={{ marginRight: 5 }} className="strongLabel">
                    Address:
                  </span>
                  {state.providerAddress}
                </div>
              </div>
            </div>
            <div>
              <Button
                style={{ textTransform: 'capitalize', cursor: 'default' }}
                type={state.status.toLowerCase() === 'active' ? 'primary' : 'danger'}
                shape="round"
              >
                {state.status}
              </Button>
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
              onClick={() => navigate(`/edit/${state.id}`, { state: { prevState: state } })}
              size="large"
              type="dashed"
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
              <a target="_blank" href={state.document} rel="noreferrer">
                <Button size="small" type="dashed" icon={<DownloadOutlined />}>
                  Services
                </Button>
              </a>

              {state.contract && (
                <a target="_blank" href={state?.contract} rel="noreferrer">
                  <Button size="small" type="dashed" icon={<DownloadOutlined />}>
                    Contract
                  </Button>
                </a>
              )}
            </div>

            <div>
              <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
                Super Admin Details
              </p>

              <div style={{ marginBottom: 0 }}>
                <span style={{ marginRight: 5 }} className="strongLabell">
                  Name:
                </span>
                {state.superAdminName}
              </div>

              <div style={{ marginBottom: 10 }}>
                <span style={{ marginRight: 5 }} className="strongLabell">
                  Email:
                </span>
                {state.superAdminEmail}
              </div>
            </div>

            <div>
              <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
                Admin Details
              </p>

              <div style={{ marginBottom: 0 }}>
                <span style={{ marginRight: 5 }} className="strongLabell">
                  Name:
                </span>
                {state.adminName}
              </div>

              <div style={{ marginBottom: 10 }}>
                <span style={{ marginRight: 5 }} className="strongLabell">
                  Email:
                </span>
                {state.adminEmail}
              </div>
            </div>

            <div>
              <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
                Office user details
              </p>

              <div style={{ marginBottom: 0 }}>
                <span style={{ marginRight: 5 }} className="strongLabell">
                  Name:
                </span>
                {state.userName}
              </div>

              <div style={{ marginBottom: 10 }}>
                <span style={{ marginRight: 5 }} className="strongLabell">
                  Email:
                </span>
                {state.userEmail}
              </div>
            </div>

            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
              Address Details
            </p>

            <div style={{ marginBottom: 0 }}>
              <span style={{ marginRight: 5 }} className="strongLabell">
                Country:
              </span>
              {state.country}
            </div>

            <div style={{ marginBottom: 0 }}>
              <span style={{ marginRight: 5 }} className="strongLabell">
                city:
              </span>
              {state.city}
            </div>

            <div style={{ marginBottom: 0 }}>
              <span style={{ marginRight: 5 }} className="strongLabell">
                Zip:
              </span>
              {state.zip}
            </div>

            <div style={{ marginBottom: 10, width: 400 }}>
              <span style={{ marginRight: 5 }} className="strongLabell">
                Address line :
              </span>
              {state.providerAddress}
            </div>
            <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 10 }}>Comment</p>
            <p>{state.comment}</p>
          </div>
          {state.branch?.length > 0 && <Branches state={state} />}
        </div>
      </div>
    </Main>
  );
};

export default Index;
