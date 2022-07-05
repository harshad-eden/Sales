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
      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Name of the service provider <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Service provider type <span style={{ color: '#f87d4e' }}>*</span>
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
            Super admin name <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Admin name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            Super admin email <span style={{ color: '#f87d4e' }}>*</span>
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
          <span className={styles.formLabel}>Logo</span>
          <Form.Item>
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
          </Form.Item>
        </div>
      </div>

      <div style={{ marginBottom: 30 }}>
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
      </div>

      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabel}>
            State <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="state" rules={[{ required: true }]}>
            <Input size="large" placeholder="State" className="ant-custom-input" />
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
      </div>

      <div>
        <span className={styles.formLabel}>
          Street Address<span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="streetAddress" rules={[{ required: true }]}>
          <Input
            type="text"
            size="large"
            placeholder="Street address"
            className="ant-custom-input"
          />
        </Form.Item>
      </div>

      <div>
        <span className={styles.formLabel}>
          Address <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="providerAddress" rules={[{ required: true }]}>
          <TextArea rows={4} placeholder="Address" />
        </Form.Item>

        <Form.Item style={{ float: 'right' }}>
          <Button size="middle" type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Links;
