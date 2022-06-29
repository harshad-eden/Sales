import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Form, notification } from 'antd';
import FinalForm from './FinalForm';
import { firestore } from '../../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Index = () => {
  const { state } = useLocation();
  const { branches, providerName } = state;

  const navigate = useNavigate();

  const { docid } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const openNotification = (msg) => {
    notification.open({
      message: msg,
    });
  };

  //HandleSubmit
  const handleFinish = async (value) => {
    setLoading(true);
    let branch;
    let updateVal = {
      ...value,
      docid,
    };
    if (branches) {
      branch = [...branches, updateVal];
    } else {
      branch = [updateVal];
    }

    setLoading(true);
    let docRef = doc(firestore, 'providers', docid);
    updateDoc(docRef, {
      branch: branch,
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
          <div>
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 50 }}
            >
              <AiOutlineArrowLeft size={30} style={{ marginBottom: 5, color: 'gray' }} />
              <h1 className={styles.pageTitle}>Add Branch Details - {providerName}</h1>
            </Link>

            <FinalForm loading={loading} form={form} handleFinish={handleFinish} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
