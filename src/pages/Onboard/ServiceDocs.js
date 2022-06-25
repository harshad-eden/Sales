import { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import styles from './index.module.css';
const { Dragger } = Upload;

const App = ({ setStep, handleFinish, setDocumentFile, loading, documentFile }) => {
  console.log('documentFile', documentFile  ? false : true )

  let buttonDisable = documentFile  ? false : true
  return (
    <div>
      <div>
        <p>
          Upload the list of services provided by the service provider
          <span style={{ color: '#f87d4e' }}> *</span>
        </p>

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
