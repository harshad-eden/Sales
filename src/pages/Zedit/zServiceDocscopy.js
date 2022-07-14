import { useEffect, useState } from 'react';
import { InboxOutlined, FileImageOutlined, DeleteOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import styles from './index.module.css';
const { Dragger } = Upload;
import { GrAttachment } from 'react-icons/gr';

const App = ({
  setStep,
  handleFinish,
  setDocumentFile,
  loading,
  documentFile,
  setImgFile,
  setContractFile,
  prevState,
  files,
}) => {
  let buttonDisable = documentFile ? false : true;
  const [isLogoExist, setisLogoExist] = useState();
  const [isDocExist, setisDocExist] = useState();
  const [contractExist, setisContractExist] = useState();

  useEffect(() => {
    if (files[0] && typeof files[0] === 'string') {
      setisLogoExist(files[0]?.split('alt')[0]?.split('-').slice(-1)[0].slice(0, -1));
    } else {
      setisLogoExist(false);
    }
    if (files[1] && typeof files[1] === 'string') {
      setisContractExist(files[1]?.split('alt')[0]?.split('-').slice(-1)[0].slice(0, -1));
    } else {
      setisContractExist(false);
    }
    if (files[2] && typeof files[2] === 'string') {
      setisDocExist(files[2]?.split('alt')[0]?.split('-').slice(-1)[0].slice(0, -1));
    } else {
      setisDocExist(false);
    }
  }, [files[0], files[1], files[2]]);

  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload Logo</span>
        <Dragger
          onRemove={() => setImgFile(null)}
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
        {isLogoExist && (
          <div className="uploadedFile">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GrAttachment /> {isLogoExist}
            </div>
            <div>
              <DeleteOutlined onClick={() => setImgFile(false)} />
            </div>
          </div>
        )}
      </div>

      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload contracts</span>
        <Dragger
          onRemove={() => setContractFile(null)}
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
        {contractExist && (
          <div className="uploadedFile">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GrAttachment /> {contractExist}
            </div>
            <div>
              <DeleteOutlined onClick={() => setContractFile(null)} />
            </div>
          </div>
        )}
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
        {isDocExist && (
          <div className="uploadedFile">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GrAttachment /> {isDocExist}
            </div>
            <div>
              <DeleteOutlined onClick={() => setDocumentFile(null)} />
            </div>
          </div>
        )}
      </div>

      <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
        <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
          Prev
        </Button>
        <Button onClick={() => handleFinish()} size="middle" type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
