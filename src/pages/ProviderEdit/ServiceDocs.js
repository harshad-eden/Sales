import { useEffect, useState } from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import { GrAttachment } from 'react-icons/gr';
import DraggerComponent from './Dragger';
import { getFileName } from './utils';

const App = ({ setStep, handleFinish, setDocumentFile, setImgFile, setContractFile, files }) => {
  const [isLogoExist, setisLogoExist] = useState();
  const [logoNewUpload, setlogoNewUpload] = useState();
  const [isDocExist, setisDocExist] = useState();
  const [isNewDocExist, setisNewDocExist] = useState();
  const [contractExist, setisContractExist] = useState();
  const [contractNewExist, setisContractNewExist] = useState();

  useEffect(() => {
    if (files[0] && typeof files[0] === 'string' && !logoNewUpload) {
      setisLogoExist(getFileName(files[0]));
    } else {
      setisLogoExist(false);
    }
    if (Array.isArray(files[1]) && files[1].length > 0 && !contractNewExist) {
      setisContractExist(
        files[1].map((item, index) => (
          <p style={{ marginBottom: 0 }} key={index}>
            {getFileName(item)}
          </p>
        )),
      );
    } else {
      setisContractExist(false);
    }
    if (Array.isArray(files[2]) && files[1].length > 0 && !isNewDocExist) {
      setisDocExist(
        files[2].map((item, index) => (
          <p style={{ marginBottom: 0 }} key={index}>
            {getFileName(item)}
          </p>
        )),
      );
    } else {
      setisDocExist(false);
    }
  }, [files[0], files[1], files[2]]);

  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload Logo</span>
        <DraggerComponent
          multiple={false}
          accept=".jpg,.jpeg,.png"
          name="images"
          setFile={setImgFile}
          setNewUpload={setlogoNewUpload}
          textOne="Upload format: png/jpg/jpeg"
        />
        {isLogoExist && (
          <div className="uploadedFile">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GrAttachment /> {isLogoExist}
            </div>
          </div>
        )}
      </div>

      <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>Upload contracts</span>
        <DraggerComponent
          multiple={true}
          accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
          name="contracts"
          setFile={setContractFile}
          setNewUpload={setisContractNewExist}
          textOne="Upload format: pdf/excel/doc"
        />
        {contractExist && (
          <div className="uploadedFile">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GrAttachment /> {contractExist}
            </div>
          </div>
        )}
      </div>

      <div>
        <span className={styles.formLabel}>
          Upload services
          <span style={{ color: '#f87d4e' }}> *</span>
        </span>

        <DraggerComponent
          multiple={true}
          accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
          name="services"
          setFile={setDocumentFile}
          setNewUpload={setisNewDocExist}
          textOne="Upload format: pdf/excel/doc"
        />

        {isDocExist && (
          <div className="uploadedFile">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <GrAttachment /> {isDocExist}
            </div>
          </div>
        )}
      </div>

      <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
        <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
          Prev
        </Button>
        <Button
          // disabled={buttonDisable}
          // loading={loading}
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
