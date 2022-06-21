/* eslint-disable quotes */

import { Form, Select, Input, Button, Upload } from 'antd';
import styles from './index.module.css';
const { Option } = Select;
const { TextArea } = Input;
import { UploadOutlined } from '@ant-design/icons';

const Links = ({ form, handleFinish, state, setImgFile }) => {
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
              <Option value="Diagnostic, Pharmacy">Diagnostic</Option>
              <Option value="Diagnostic, Pharmacy">Pharmacy</Option>
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
              placeholder="Admin Email"
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
