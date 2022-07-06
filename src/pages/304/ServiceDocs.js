import { useState } from 'react';
import {
  InboxOutlined,
  UploadOutlined,
  FileImageOutlined,
  CameraOutlined,
} from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import styles from './index.module.css';
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
  console.log('documentFile', documentFile ? false : true);

  let buttonDisable = documentFile ? false : true;
  return (
    <div>
      {/* <div className={styles.formitem}>
        <span className={styles.formLabel}>Logo</span>
        <Upload
          accept=".jpg,.jpeg,.png"
          beforeUpload={() => false}
          onChange={(e) => setImgFile(e.fileList[0].originFileObj)}
        >
          <Button
            size="large"
            style={{ width: '100%', borderRadius: 6, fontSize: 14 }}
            icon={<UploadOutlined />}
          >
            Click to Upload
          </Button>
        </Upload>
      </div> */}
      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload Logo</span>
        <Dragger
          beforeUpload={() => false}
          onChange={(e) => setContractFile(e.fileList[0].originFileObj)}
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

      {/* <div style={{ position: 'relative', width: '10%', marginBottom: 30 }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: 'white',
            position: 'relative',
          }}
        ></div>
        <label
          style={{
            position: 'absolute',
            backgroundColor: '#f2f2f2',
            right: 0,
            bottom: 0,
            height: 20,
            width: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          <input
            onChange={(e) => console.log(e.target.files[0])}
            style={{ display: 'none' }}
            type="file"
            id="img"
            name="img"
            accept="image/*"
          />
          <CameraOutlined />
        </label>
      </div> */}

      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload contracts</span>
        <Dragger
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
      </div>

      <div>
        {/* <span className={styles.formLabel}>
          Upload contracts Upload the list of services provided by the service provider
          <span style={{ color: '#f87d4e' }}> *</span> */}

        <span className={styles.formLabel}>
          Upload services
          <span style={{ color: '#f87d4e' }}> *</span>
        </span>

        <Dragger
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
