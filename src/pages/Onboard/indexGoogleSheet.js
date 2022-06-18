import { useState } from 'react';
import axios from 'axios';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Form } from 'antd';
import InitialForm from './InitailForm';
import FinalForm from './FinalForm';

const Index = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);
  const [state, setState] = useState(0);
  const [response, setResponse] = useState(null);

  const handleFirstForm = (value) => {
    setState(value);
    if (value['Branch exist'] === 'Yes') {
      setStep(1);
    }
  };

  const handleFinish = async (value) => {
    let updateValue = {
      ...state,
      ...value,
    };
    localStorage.setItem('testObject', { updateValue });
    let result = await axios
      .post('https://sheet.best/api/sheets/ae40589d-e8cd-45f1-b482-92efbbc02080', updateValue)
      .catch((err) => console.log(err));
    setResponse(result);
  };

  async function handleTest() {
    let ress = localStorage.getItem('testObject');

    let result = await axios
      .post('https://sheet.best/api/sheets/ae40589d-e8cd-45f1-b482-92efbbc02080', {
        ['Provider name']: 'Booom-1',
        ['Provider type']: 'Booom-1',
        ['Super admin name']: 'Booom-1 name',
        ['Super admin email']: 'Booom-1 email',
        ['Branch exist']: 'Booom-1',
        ['Contact number']: '12321',
        ['Address']: 'adress Booom-1',
      })
      .catch((err) => console.log(err));
    setResponse(result);

    console.log(result);
  }

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <h1 className={styles.pageTitle}>Service Provider Details</h1>
          <InitialForm state={state} form={form} handleFinish={handleFirstForm} />
        </div>
      );
    }
    if (step === 1) {
      return (
        <div>
          <h1 className={styles.pageTitleThree}>Branches</h1>
          <FinalForm form={form} handleFinish={handleFinish} setStep={setStep} />
        </div>
      );
    }
  };

  return (
    <Main pageName="Onboard provider">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          {renderStep()}
          <Button onClick={handleTest}>test</Button>
        </div>
      </div>
    </Main>
  );
};

export default Index;
