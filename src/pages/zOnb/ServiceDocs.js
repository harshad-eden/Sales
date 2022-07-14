import { useState } from 'react';
import { InboxOutlined, FileImageOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import styles from './index.module.css';
import DraggerComponent from './Dragger';
const { Dragger } = Upload;

const App = ({
  setStep,
  handleFinish,
  setDocumentFile,
  loading,
  documentFile,
  setImgFile,
  setContractFile,
}) => {
  let buttonDisable = documentFile ? false : true;
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload Logo</span>
        <Dragger
          onRemove={() => setDocumentFile(null)}
          beforeUpload={() => false}
          onChange={(e) => setImgFile(e.fileList[0].originFileObj)}
          style={{ height: 300 }}
          accept=".jpg,.jpeg,.png"
        >
          <p className="ant-upload-drag-icon">
            <FileImageOutlined style={{ fontSize: 37 }} />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Upload format: png/jpg/jpeg format</p>
        </Dragger>
      </div>

      {/* <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload contracts</span>
        <Dragger
          onRemove={() => setDocumentFile(null)}
          beforeUpload={() => false}
          onChange={(e) => setContractFile(e.fileList[0].originFileObj)}
          style={{ height: 500 }}
          accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Upload format: pdf/excel/doc format</p>
        </Dragger>
      </div> */}
      <DraggerComponent />

      <div>
        {/* <span className={styles.formLabel}>
          Upload contracts Upload the list of services provided by the service provider
          <span style={{ color: '#f87d4e' }}> *</span> */}

        <span className={styles.formLabel}>
          Upload services
          <span style={{ color: '#f87d4e' }}> *</span>
        </span>

        <Dragger
          onRemove={() => setDocumentFile(null)}
          beforeUpload={() => false}
          onChange={(e) => setDocumentFile(e.fileList[0].originFileObj)}
          style={{ height: 500 }}
          accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Upload format: pdf/excel/doc format</p>
        </Dragger>
      </div>

      <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
        <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
          Prev
        </Button>
        <Button
          disabled={buttonDisable}
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
