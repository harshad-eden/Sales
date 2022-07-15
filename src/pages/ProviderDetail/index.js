import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { Button } from 'antd';

import Branches from './Branches';
import { firestore } from '../../firebase';
import MainDetails from './MainDetails';
import Main from '../../layout/Main';
import styles from './index.module.css';

const Index = () => {
  const { state } = useLocation();
  const [data, setData] = useState(state);

  const navigate = useNavigate();
  const { docId } = useParams();

  useEffect(() => {
    if (!data) {
      let docRef = doc(firestore, 'providers', docId);
      getDoc(docRef).then((doc) => setData(doc.data()));
    }
  }, []);

  return (
    <Main pageName="Dashboard">
      {data && (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 10 }}
            >
              <AiOutlineArrowLeft size={30} style={{ marginBottom: 5, color: 'gray' }} />
              <h2 className={styles.pageTitle}>{data.providerName}</h2>
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
                {data.logo ? (
                  <img
                    style={{ height: 100, width: 100, borderRadius: 50, marginLeft: 15 }}
                    src={data.logo}
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
                    <strong>{data.providerName}</strong>
                  </h3>
                  <p className="providerType">{data.providerType}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div className="strongLabel">Branches:</div>
                    <p style={{ marginBottom: 0 }}>{data.branch ? data.branch?.length : 0}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div className="strongLabel">Contact:</div>
                    <p style={{ marginBottom: 0 }}>{data.providerContactNumber}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div className="strongLabel">Email:</div>
                    <p style={{ marginBottom: 0 }}>{data.providerEmail}</p>
                  </div>

                  <div style={{ marginBottom: 0 }}>
                    <span style={{ marginRight: 5 }} className="strongLabel">
                      Address:
                    </span>
                    {data.providerAddress}
                  </div>
                </div>
              </div>
              <div>
                <Button
                  style={{ textTransform: 'capitalize', cursor: 'default' }}
                  type={data.status.toLowerCase() === 'active' ? 'primary' : 'danger'}
                  shape="round"
                >
                  {data.status}
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
                onClick={() => navigate(`/edit/${data.id}`, { state: { prevState: data } })}
                size="large"
                type="dashed"
                style={{ width: '90%' }}
              >
                Edit
              </Button>
              <Button
                type="primary"
                onClick={() =>
                  navigate(`/addbranch/${data.id}`, {
                    state: {
                      branches: data.branch ? data.branch : [],
                      providerName: data.providerName,
                    },
                  })
                }
                size="large"
                style={{ width: '90%' }}
              >
                Add branch
              </Button>
            </div>
            <MainDetails data={data} />
            {data.branch?.length > 0 && <Branches data={data} />}
          </div>
        </div>
      )}
    </Main>
  );
};

export default Index;
