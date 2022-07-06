/* eslint-disable quotes */
import { Form, Select, Input, Button, Upload } from 'antd';
import styles from './index.module.css';
const { Option } = Select;
const { TextArea } = Input;
import { UploadOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Links = ({ form, handleFinish, state, setImgFile, setContractFile }) => {
  return (
    <Form initialValues={state} form={form} onFinish={handleFinish}>
      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
        Provider Details
      </p>
      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Name <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Type <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerType" rules={[{ required: true }]}>
            <Select size="large" onChange={() => console.log()}>
              <Option value="Hospital">Hospital</Option>
              <Option value="Independent Clinic">Independent Clinic</Option>
              <Option value="Diagnostic">Diagnostic</Option>
              <Option value="Pharmacy">Pharmacy</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Contact Number <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerContactNumber" rules={[{ required: true }]}>
            <Input
              type="number"
              size="large"
              placeholder="Contact number"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Status <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerType" rules={[{ required: true }]}>
            <Select size="large" onChange={() => console.log()}>
              <Option value="Hospital">Hospital</Option>
              <Option value="Independent Clinic">Independent Clinic</Option>
              <Option value="Diagnostic">Diagnostic</Option>
              <Option value="Pharmacy">Pharmacy</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>User Details</p>

      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Admin name <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Admin name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Admin email <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminEmail" rules={[{ required: true }]}>
            <Input
              type="email"
              size="large"
              placeholder="Admin email"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>
      </div>

      {/* <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
        Official details
      </p> */}
      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>User name</span>
          <Form.Item name="userName">
            <Input size="large" placeholder="User name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>User email</span>
          <Form.Item name="userEmail">
            <Input
              type="email"
              size="large"
              placeholder="User email"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>
      </div>

      {/* <div style={{ marginBottom: 30 }}>
        <span className={styles.formLabel}>
          Upload contracts <span style={{ color: '#f87d4e' }}>*</span>
        </span>
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
      </div> */}

      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
        Address Details
      </p>

      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            City <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="city" rules={[{ required: true }]}>
            <Input size="large" placeholder="City" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Zip code<span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="zip" rules={[{ required: true }]}>
            <Input type="text" size="large" placeholder="ZIP code" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Country<span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="country" rules={[{ required: true }]}>
            <Input type="text" size="large" placeholder="Country" className="ant-custom-input" />
          </Form.Item>
        </div>
      </div>

      <div>
        <span className={styles.formLabel}>
          Address Line 1 <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="providerAddress" rules={[{ required: true }]}>
          <TextArea rows={4} placeholder="Address" />
        </Form.Item>

        <span className={styles.formLabel}>Comment</span>
        <Form.Item name="providerAddress">
          <TextArea rows={4} placeholder="Address" />
        </Form.Item>

        <Form.Item style={{ float: 'right' }}>
          <Button style={{ borderRadius: 10 }} size="large" type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Links;
