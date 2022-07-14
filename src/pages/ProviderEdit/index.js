import { useEffect, useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Form, notification } from 'antd';
import InitialForm from './editFirstForm';
import { firestore, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ServiceDocs from './ServiceDocs';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { updateDoc, doc } from 'firebase/firestore';
import { sendEmail } from '../../components/SendEmail';

const Index = () => {
  const {
    state: { prevState },
  } = useLocation();
  const { docId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [state, setState] = useState(0);
  const [imgFile, setImgFile] = useState(false);
  const [contractFile, setContractFile] = useState(false);
  const [documentFile, setDocumentFile] = useState(false);

  useEffect(() => {
    setImgFile(prevState.logo);
    setDocumentFile(prevState.document);
    setContractFile(prevState.contract);
  }, []);

  const handleFirstForm = (value) => {
    setState(value);
    setStep(1);
  };

  const openNotification = (msg) => {
    notification.open({
      message: msg,
    });
  };

  const handleFinish = async () => {
    setLoading(true);

    // let logo;
    // let contract;
    // let document;

    // if (imgFile) {
    //   if (prevState.logo === imgFile) {
    //     return null;
    //   } else {
    //     logo = imgFile[0];
    //   }
    // } else {
    //   logo = '';
    // }

    // if (contractFile) {
    //   if (prevState.contract === contractFile) {
    //     return null;
    //   } else {
    //     contract = contractFile;
    //   }
    // } else {
    //   contract = [];
    // }

    // if (documentFile) {
    //   if (prevState.document === documentFile) {
    //     return null;
    //   } else {
    //     document = documentFile;
    //   }
    // } else {
    //   document = [];
    // }

    if (state.status !== prevState.status) {
      sendEmail(prevState.providerName, prevState.status, state.status);
    }

    let updatedValue = {
      ...state,
    };

    let docRef = doc(firestore, 'providers', docId);
    updateDoc(docRef, updatedValue)
      .then(() => {
        openNotification('Form successfully Submitted');
        navigate('/');
      })
      .catch(() => {
        openNotification('Form submission failed');
      });
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
            prevState={prevState}
            setImgFile={setImgFile}
            state={state}
            form={form}
            handleFinish={handleFirstForm}
            setContractFile={setContractFile}
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
            prevState={prevState}
            documentFile={documentFile}
            handleFinish={handleFinish}
            setDocumentFile={setDocumentFile}
            setImgFile={setImgFile}
            setContractFile={setContractFile}
            files={[imgFile, contractFile, documentFile]}
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
