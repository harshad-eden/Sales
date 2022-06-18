import { useState } from 'react';
import { Form, Select, Input, Button } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import styles from './index.module.css';
import { UserAddOutlined } from '@ant-design/icons';

const ThirdForm = ({ form, handleFinish, setStep }) => {
  const [users, setUsers] = useState(1);

  return (
    <Form form={form} onFinish={handleFinish}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>Branch name</span>
          <Form.Item name="Branch Name" rules={[{ required: true }]}>
            <Input size="large" placeholder="Branch Name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>
            Contact number <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="Branch contact number" rules={[{ required: true }]}>
            <Input
              type="number"
              size="large"
              placeholder="Provider name"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>
            Name of branch admin <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="Branch admin name" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>
            Email of branch admin <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="Branch admin email" rules={[{ required: true }]}>
            <Input
              type="email"
              size="large"
              placeholder="Branch admin email"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>
      </div>
      <div>
        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Payment details
        </p>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: '50%' }}>
            <span className={styles.formLabell}>
              Account number <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="Account number" rules={[{ required: true }]}>
              <Input size="large" placeholder="Account number" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div style={{ width: '50%' }}>
            <span className={styles.formLabell}>
              Name of beneficiary <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="Name of beneficiary" rules={[{ required: true }]}>
              <Input size="large" placeholder="Name of beneficiary" className="ant-custom-input" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 13,
        }}
      >
        <p style={{ textDecoration: 'underline', marginBottom: 0, color: 'gray' }}>Add users</p>
        <Button
          onClick={() => setUsers(users + 1)}
          type=""
          icon={<UserAddOutlined />}
          size="small"
        />
      </div>
      {[...Array(users).keys()].map((i) => (
        <div key={i + 1} style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: '50%' }}>
            <span className={styles.formLabell}>User Email address</span>
            <Form.Item name={`User email ${i + 1}`} rules={[{ required: true }]}>
              <Input
                type="email"
                size="large"
                placeholder="Provider name"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>

          <div style={{ width: '50%' }}>
            <span className={styles.formLabell}>Role</span>
            <Form.Item name={`User type ${i + 1}`}>
              <Select size="large" initialvalues="lucy" onChange={() => console.log()}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
      ))}

      <div>
        <span className="form-label">
          Address <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="Branch address">
          <TextArea rows={4} placeholder="Branch address" required />
        </Form.Item>

        <div style={{ float: 'right', display: 'flex', gap: 20 }}>
          <Button onClick={() => setStep(0)} size="middle" type="" htmlType="submit">
            prev
          </Button>
          <Button size="middle" type="primary" htmlType="submit">
            submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ThirdForm;
