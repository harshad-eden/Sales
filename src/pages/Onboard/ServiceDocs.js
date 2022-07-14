import { useState } from 'react';
import { InboxOutlined, FileImageOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import styles from './index.module.css';
import DraggerComponent from './Dragger';
const { Dragger } = Upload;

const App = ({ setStep, handleFinish, setDocumentFile, loading, setImgFile, setContractFile }) => {
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload Logo</span>
        <DraggerComponent
          multiple={false}
          accept=".jpg,.jpeg,.png"
          name="images"
          setFile={setImgFile}
        />
      </div>

      <div>
        <span className={styles.formLabel}>
          Upload contracts
          <span style={{ color: '#f87d4e' }}> </span>
        </span>

        <DraggerComponent
          multiple={true}
          accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
          name="contracts"
          setFile={setContractFile}
        />
      </div>

      <div>
        <span className={styles.formLabel}>
          Upload services
          <span style={{ color: '#f87d4e' }}> </span>
        </span>

        <DraggerComponent
          multiple={true}
          accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
          name="services"
          setFile={setDocumentFile}
        />
      </div>

      <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
        <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
          Prev
        </Button>
        <Button
          loading={loading}
          onClick={() => handleFinish()}
          size="middle"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
