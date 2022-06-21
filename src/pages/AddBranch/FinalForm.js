import { useState } from 'react';
import { Form, Select, Input, Button } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import styles from './index.module.css';
import { UserAddOutlined } from '@ant-design/icons';
import { MdPersonRemove } from 'react-icons/md'

const ThirdForm = ({ form, handleFinish }) => {
  const [users, setUsers] = useState(1);


  

  return (
    <Form form={form} onFinish={handleFinish}>
      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabell}>Branch name</span>
          <Form.Item name="branchName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Branch Name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}> 
          <span className={styles.formLabell}>
            Contact number <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="branchContactNumber" rules={[{ required: true }]}>
            <Input
              type="number"
              size="large"
              placeholder="Provider name"
              className="ant-custom-input"
            />
          </Form.Item>
        </div>
      </div>
      <div className={styles.formDiv}>
        <div className={styles.formitem}>
          <span className={styles.formLabell}>
            Name of branch admin <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="branchAdminName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div className={styles.formitem}>
          <span className={styles.formLabell}>
            Email of branch admin <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="branchAdminEmail" rules={[{ required: true }]}>
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
        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Account number <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="accountNumber" rules={[{ required: true }]}>
              <Input size="large" placeholder="Account number" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Name of beneficiary <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="nameOfBeneficiary" rules={[{ required: true }]}>
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
      {[...Array(users).keys()].map((i, index) => (
        <div key={i + 1} style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>User Email address</span>
            <Form.Item name={`userEmail ${i + 1}`} rules={[{ required: true }]}>
              <Input
                type="email"
                size="large"
                placeholder="Provider name"
                className="ant-custom-input"
              />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>Role</span>
            <Form.Item name={`userType ${i + 1}`}>
              <Select size="large" onChange={() => console.log()}>
                <Option value="Front-desk">Front-desk</Option>
                <Option value="Claim team">Claim team</Option>
              </Select>
            </Form.Item>
          </div>
          {index !== 0 && <MdPersonRemove onClick={() => setUsers(users-1)} style={{cursor: 'pointer'}} />}
        </div>
      ))}

      <div>
        <span className="form-label">
          Address <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="branchAddress">
          <TextArea rows={4} placeholder="Branch address" required />
        </Form.Item>

        <div style={{ float: 'right', display: 'flex', }}>
          <Button size="middle" type="primary" htmlType="submit">
            submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ThirdForm;
