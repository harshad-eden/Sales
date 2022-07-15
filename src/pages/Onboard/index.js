import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Form, notification } from 'antd';
import InitialForm from './InitailForm';
import { firestore } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import ServiceDocs from './ServiceDocs';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Index = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [state, setState] = useState(0);
  const [imgFile, setImgFile] = useState(false);
  const [contractFile, setContractFile] = useState([]);
  const [documentFile, setDocumentFile] = useState([]);
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
    setLoading(true);
    let updatedValue = {
      ...state,
      userName: state.userName ? state.userName : '',
      userEmail: state.userName ? state.userEmail : '',
      logo: imgFile ? imgFile : '',
      document: documentFile,
      contract: contractFile,
      createdAt: new Date(),
    };
    try {
      addDoc(providersCollectionref, updatedValue);
      openNotification('Form successfully Submitted');
      navigate('/providers');
    } catch (error) {
      openNotification('Form submition failed');
      setLoading(false);
      alert(error);
      console.log(error);
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
            handleFinish={handleFinish}
            setDocumentFile={setDocumentFile}
            imgFile={imgFile}
            contractFile={contractFile}
            documentFile={documentFile}
            setImgFile={setImgFile}
            setContractFile={setContractFile}
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
