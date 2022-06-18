import { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import styles from './index.module.css';
const { Dragger } = Upload;

const App = ({ setStep }) => {
  const [value, setValue] = useState(null);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const renderButtons = () => {
    if (value === null) {
      return (
        <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
          <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
            Prev
          </Button>
          <Button
            disabled
            onClick={() => setStep(2)}
            size="middle"
            type="primary"
            htmlType="submit"
          >
            Next
          </Button>
        </div>
      );
    }
    if (value === 'Yes') {
      return (
        <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
          <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
            Prev
          </Button>
          <Button onClick={() => setStep(2)} size="middle" type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      );
    }
    if (value === 'No') {
      return (
        <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 30 }}>
          <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
            Prev
          </Button>
          <Button onClick={() => setStep(2)} size="middle" type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <p>
          Upload the list of services provided by the service provider
          <span style={{ color: '#f87d4e' }}> *</span>
        </p>

        <Dragger style={{ height: 500 }}>
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
        <Button onClick={() => setStep(2)} size="middle" type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
