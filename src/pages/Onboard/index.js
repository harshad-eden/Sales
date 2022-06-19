import { useState, useEffect } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Form } from 'antd';
import InitialForm from './InitailForm';
import FinalForm from './FinalForm';
import { firestore, storage } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import FormTwo from './FormTwo';

const Index = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(0);
  const [state, setState] = useState(0);
  const [imgFile, setImgFile] = useState(0);
  const [documentFile, setDocumentFile] = useState(0);
  const providersCollectionref = collection(firestore, 'providers');

  //Initial form
  const handleFirstForm = (value) => {
    setState(value)
    setStep(1);
  };


  //HandleSubmit
  const handleFinish = async () => {
   
    let fileName = state.providerName.replace(/\s/g, '') + state.providerContactNumber.slice(-4)


    let firebaseImgUrl
    let firebaseDocUrl
   
    if(imgFile){
      const imgRef = ref(storage, `images/${fileName}-${imgFile.name}`)
      let imgSapnshot =  await uploadBytes(imgRef, imgFile)
       firebaseImgUrl = await getDownloadURL(imgSapnshot.ref).then( url => url)
    }

    if(documentFile){
      const docRef = ref(storage, `documents/${fileName}-${documentFile.name}`)
      let imgSapnshot =  await uploadBytes(docRef, documentFile)
      firebaseDocUrl = await getDownloadURL(imgSapnshot.ref).then( url =>url)
    } else {
      alert('Please upload doc')
    }

    
   

    if(!imgFile && firebaseDocUrl || firebaseImgUrl && firebaseDocUrl){
      let updatedValue = {
        ...state,
        document: firebaseDocUrl,
        logo: firebaseImgUrl ? firebaseImgUrl : false
      }
      
      try {
        addDoc(providersCollectionref, updatedValue);
      } catch (error) {
        console.log(error);
      }
    }   
    
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <h1 className={styles.pageTitle}>Service Provider Details</h1>
          <InitialForm setImgFile={setImgFile} state={state} form={form} handleFinish={handleFirstForm} />
        </div>
      );
    }
    if (step === 1) {
      return (
        <div>
          <h1 className={styles.pageTitleThree}>Service Details</h1>
          <FormTwo setStep={setStep} handleFinish={handleFinish} setDocumentFile={setDocumentFile}/>
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
