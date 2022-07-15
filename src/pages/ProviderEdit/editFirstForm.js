/* eslint-disable quotes */
import { Form, Select, Input, Button, Upload } from 'antd';
import styles from './index.module.css';
const { Option } = Select;
const { TextArea } = Input;

const { Dragger } = Upload;

const Links = ({ form, handleFinish, state, prevState }) => {
  const admin = localStorage.getItem('user')?.includes('admin@sales.com');

  console.log(admin);

  return (
    <>
      <Form initialValues={prevState} form={form} onFinish={handleFinish}>
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
              <Select size="large">
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
              <Select disabled={admin ? false : true} size="large">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="suspended">Suspended</Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <span className={styles.formLabell}>Email</span>
        <Form.Item name="providerEmail" rules={[{ required: true }]}>
          <Input type="email" style={{ borderRadius: 10 }} size="large" placeholderr="Address" />
        </Form.Item>

        <span className={styles.formLabell}>Comment</span>
        <Form.Item name="comment">
          <Input style={{ borderRadius: 10 }} size="large" placeholderr="Address" />
        </Form.Item>

        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Admin Details
        </p>

        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Admin name <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="adminName" rules={[{ required: true }]}>
              <Input size="large" placeholderr="Admin name" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Admin email <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="adminEmail" rules={[{ required: true }]}>
              <Input
                type="email"
                size="large"
                placeholderr="Admin email"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>
        </div>

        <span className={styles.formLabell}>Contact Number</span>
        <Form.Item name="adminContact" rules={[{ required: true }]}>
          <Input type="number" style={{ borderRadius: 10 }} size="large" placeholderr="Address" />
        </Form.Item>

        <div>
          <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
            Payment details
          </p>
          <div className={styles.formDiv}>
            <div className={styles.formitem}>
              <span className={styles.formLabell}>
                Name of beneficiary <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="beneficiaryName" rules={[{ required: true }]}>
                <Input
                  size="large"
                  placeholderr="Name of beneficiary"
                  className="ant-custom-input"
                />
              </Form.Item>
            </div>
            <div className={styles.formitem}>
              <span className={styles.formLabell}>
                Account number <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="accountNumber" rules={[{ required: true }]}>
                <Input size="large" placeholderr="Account number" className="ant-custom-input" />
              </Form.Item>
            </div>
          </div>

          <div className={styles.formDiv}>
            <div className={styles.formitem}>
              <span className={styles.formLabell}>
                Swift code <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="swiftCode" rules={[{ required: true }]}>
                <Input size="large" placeholderr="Swift code" className="ant-custom-input" />
              </Form.Item>
            </div>

            <div className={styles.formitem}>
              <span className={styles.formLabell}>
                Bank name <span style={{ color: '#f87d4e' }}>*</span>
              </span>
              <Form.Item name="bankName" rules={[{ required: true }]}>
                <Input size="large" placeholderr="Bank name" className="ant-custom-input" />
              </Form.Item>
            </div>
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
            <span className={styles.formLabell}>Zip code</span>
            <Form.Item name="zip">
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
