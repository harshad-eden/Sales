/* eslint-disable quotes */
import { Form, Select, Input, Button, Upload } from 'antd';
import styles from './index.module.css';
const { Option } = Select;
const { TextArea } = Input;
import { UploadOutlined, CameraOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Links = ({ form, handleFinish, state }) => {
  return (
    <>
      <Form initialValues={state} form={form} onFinish={handleFinish}>
        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Provider Details
        </p>
        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Name <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="providerName" rules={[{ required: true }]}>
              <Input size="large" placeholders="Provider name" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
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
            <span className={styles.formLabell}>
              Contact Number <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="providerContactNumber" rules={[{ required: true }]}>
              <Input
                type="number"
                size="large"
                placeholderr="Contact number"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Status <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="status" rules={[{ required: true }]}>
              <Select size="large">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <span className={styles.formLabell}>Comment</span>
        <Form.Item name="comment">
          <Input style={{ borderRadius: 10 }} size="large" placeholderr="Address" />
        </Form.Item>

        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>User Details</p>

        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Admin name <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="superAdminName" rules={[{ required: true }]}>
              <Input size="large" placeholderr="Admin name" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Admin email <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="superAdminEmail" rules={[{ required: true }]}>
              <Input
                type="email"
                size="large"
                placeholderr="Admin email"
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
            <span className={styles.formLabell}>User name</span>
            <Form.Item name="userName">
              <Input size="large" placeholderr="User name" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>User email</span>
            <Form.Item name="userEmail">
              <Input
                type="email"
                size="large"
                placeholderr="User email"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
        </div>

        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Address Details
        </p>

        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              City <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="city" rules={[{ required: true }]}>
              <Input size="large" placeholderr="City" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Zip code<span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="zip" rules={[{ required: true }]}>
              <Input
                type="text"
                size="large"
                placeholderr="ZIP code"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Country<span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="country" rules={[{ required: true }]}>
              <Input type="text" size="large" placeholderr="Country" className="ant-custom-input" />
            </Form.Item>
          </div>
        </div>

        <div>
          <span className={styles.formLabell}>
            Address Line 1 <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerAddress" rules={[{ required: true }]}>
            <TextArea style={{ borderRadius: 10 }} rows={4} placeholderr="Address" />
          </Form.Item>

          <Form.Item style={{ float: 'right' }}>
            <Button style={{ borderRadius: 10 }} size="large" type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Links;
