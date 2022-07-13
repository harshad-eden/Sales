import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Form, notification } from 'antd';
import FinalForm from './Form';
import { firestore } from '../../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Index = () => {
  const { state } = useLocation();
  const { item, data } = state;

  const navigate = useNavigate();

  const { docId } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const openNotification = (msg) => {
    notification.open({
      message: msg,
    });
  };

  //HandleSubmit
  const handleFinish = async (value) => {
    let updatedValue = data.branch.map((item) => {
      if (item.uuid === docId) {
        return (item = { ...value, uuid: item.uuid });
      } else {
        return item;
      }
    });

    console.log(updatedValue);

    let docRef = doc(firestore, 'providers', data.id);
    updateDoc(docRef, {
      branch: updatedValue,
    })
      .then((res) => {
        openNotification('Form successfully Submitted');
        navigate('/');
      })
      .catch((er) => {
        openNotification('Form submission failed');
      });
  };

  return (
    <Main pageName="Add Branch">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div style={{ marginBottom: 80 }}>
            <div
              onClick={() => navigate(-1)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                marginBottom: 50,
                cursor: 'pointer',
              }}
            >
              <AiOutlineArrowLeft size={30} style={{ marginBottom: 5, color: 'gray' }} />
              <h1 className={styles.pageTitle}>Edit Branch Details - {item.branchName}</h1>
            </div>

            <FinalForm prevState={item} loading={loading} form={form} handleFinish={handleFinish} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
