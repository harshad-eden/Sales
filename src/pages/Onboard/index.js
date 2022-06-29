import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Form, notification } from 'antd';
import InitialForm from './InitailForm';
import { firestore, storage } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ServiceDocs from './ServiceDocs';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Index = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [state, setState] = useState(0);
  const [imgFile, setImgFile] = useState(false);
  const [documentFile, setDocumentFile] = useState(false);
  const providersCollectionref = collection(firestore, 'providers');

  //Initial form
  const handleFirstForm = (value) => {
    setState(value);
    setStep(1);
  };

  const openNotification = (msg) => {
    notification.open({
      message: msg,
    });
  };

  //HandleSubmit
  const handleFinish = async () => {
    let uuid = uuidv4();
    setLoading(true);
    let firebaseImgUrl;
    let firebaseDocUrl;
    if (imgFile) {
      const imgRef = ref(storage, `images/${uuid}-${imgFile.name}`);
      let imgSapnshot = await uploadBytes(imgRef, imgFile);
      firebaseImgUrl = await getDownloadURL(imgSapnshot.ref).then((url) => url);
    }

    if (documentFile) {
      const docRef = ref(storage, `documents/${uuid}-${documentFile.name}`);
      let imgSapnshot = await uploadBytes(docRef, documentFile);
      firebaseDocUrl = await getDownloadURL(imgSapnshot.ref).then((url) => url);

      if ((!imgFile && firebaseDocUrl) || (firebaseImgUrl && firebaseDocUrl)) {
        let updatedValue = {
          ...state,
          document: firebaseDocUrl,
          logo: firebaseImgUrl ? firebaseImgUrl : false,
          uuid,
          status: 'Inactive',
          createdAt: new Date(),
        };

        try {
          addDoc(providersCollectionref, updatedValue);
          openNotification('Form successfully Submitted');
          navigate('/');
        } catch (error) {
          openNotification('Form submition failed');
          setLoading(false);
          alert(error);
          console.log(error);
        }
      }
    } else {
      return alert('Please upload doc');
    }
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 50 }}>
            <AiOutlineArrowLeft size={30} style={{ marginBottom: 5, color: 'gray' }} />
            <h1 className={styles.pageTitle}>Service Provider Details</h1>
          </Link>
          <InitialForm
            setImgFile={setImgFile}
            state={state}
            form={form}
            handleFinish={handleFirstForm}
          />
        </div>
      );
    }
    if (step === 1) {
      return (
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 50 }}>
            <AiOutlineArrowLeft size={30} style={{ marginBottom: 5, color: 'gray' }} />
            <h1 className={styles.pageTitle}>Service Details</h1>
          </Link>

          <ServiceDocs
            loading={loading}
            setStep={setStep}
            documentFile={documentFile}
            handleFinish={handleFinish}
            setDocumentFile={setDocumentFile}
          />
        </div>
      );
    }
  };

  return (
    <Main pageName="Onboard provider">
      <div className={styles.container}>
        <div className={styles.formContainer}>{renderStep()}</div>
      </div>
    </Main>
  );
};

export default Index;
