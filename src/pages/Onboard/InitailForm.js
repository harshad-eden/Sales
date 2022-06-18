/* eslint-disable quotes */
import { useEffect, useState } from 'react';
import { Form, Select, Input, Button, Radio, Space, Upload } from 'antd';
import styles from './index.module.css';
const { Option } = Select;
const { TextArea } = Input;

const Links = ({ form, handleFinish, state }) => {
  const [value, setValue] = useState(null);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Form initialValues={state} form={form} onFinish={handleFinish}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Name of the service provider <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Service provider type <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="providerType" rules={[{ required: true }]}>
            <Select size="large" initialvalues="lucy" onChange={() => console.log()}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Super admin name <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Admin name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Super admin email <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="SuperAdminEmail" rules={[{ required: true }]}>
            <Input
              type="email"
              size="large"
              placeholder="Admin Email"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
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

        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            More than one branch ?<span style={{ color: '#f87d4e' }}> *</span>
          </span>
          <Form.Item name="logo">
            <Upload>
              <Button>Upload</Button>
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
