import { useState, useEffect } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Form } from 'antd';
import FinalForm from './FinalForm';
import { firestore } from '../../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';


const Index = () => {
  const navigate = useNavigate()
  const {docId} = useParams()
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  


  //HandleSubmit
  const handleFinish = async (value) => {
    setLoading(true)
    let docRef = doc(firestore, 'providers', docId)
    let updateVal = {
      ...value,
      docId
    }
      updateDoc(docRef, {
        branch: [updateVal]
      })
      .then((res) => {
        navigate('/')
        console.log(res)
      })
  };
  

  return (
    <Main pageName="Add Branch">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div>
          <h1 className={styles.pageTitleThree}>Branch Details</h1>
          <FinalForm loading={loading} form={form} handleFinish={handleFinish}  />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
