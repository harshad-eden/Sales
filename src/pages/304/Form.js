import { useState } from 'react';
import { Form, Select, Input, Button, Space } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import styles from './index.module.css';
import { UserAddOutlined } from '@ant-design/icons';
import { MdPersonRemove } from 'react-icons/md';

const ThirdForm = ({ form, handleFinish }) => {
  let roleTypes = ['Front-desk', 'Claim team'];

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      initialValues={{ users: [{ userEmail: '', userRole: '' }] }}
    >
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
              Name of beneficiary <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="nameOfBeneficiary" rules={[{ required: true }]}>
              <Input size="large" placeholder="Name of beneficiary" className="ant-custom-input" />
            </Form.Item>
          </div>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Account number <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="accountNumber" rules={[{ required: true }]}>
              <Input size="large" placeholder="Account number" className="ant-custom-input" />
            </Form.Item>
          </div>
        </div>

        <div className={styles.formDiv}>
          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Swift code <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="swiftCode" rules={[{ required: true }]}>
              <Input size="large" placeholder="Swift code" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div className={styles.formitem}>
            <span className={styles.formLabell}>
              Bank Name <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="bankName" rules={[{ required: true }]}>
              <Input size="large" placeholder="Bank name" className="ant-custom-input" />
            </Form.Item>
          </div>
        </div>
      </div>

      <Form.List style={{ width: '100%' }} name="users">
        {(fields, { add, remove }) => (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 13,
              }}
            >
              <p style={{ textDecoration: 'underline', marginBottom: 0, color: 'gray' }}>
                Add users
              </p>
              <Button onClick={() => add()} type="" icon={<UserAddOutlined />} size="small" />
            </div>
            {fields.map((field, index) => (
              <div className={styles.formDiv} key={field.key}>
                <div className={styles.formitem}>
                  <span className={styles.formLabell}>User email</span>
                  <Form.Item
                    {...field}
                    name={[field.name, 'userEmail']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing user email',
                      },
                    ]}
                  >
                    <Input size="large" placeholder="User email" className="ant-custom-input" />
                  </Form.Item>
                </div>

                <div className={styles.formitem}>
                  <span className={styles.formLabell}>User role</span>
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <Form.Item
                        {...field}
                        name={[field.name, 'userRole']}
                        rules={[
                          {
                            required: true,
                            message: 'Missing user role',
                          },
                        ]}
                      >
                        <Select size="large">
                          {roleTypes.map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    )}
                  </Form.Item>
                </div>

                {index > 0 && <MdPersonRemove onClick={() => remove(field.name)} />}
              </div>
            ))}
          </>
        )}
      </Form.List>

      <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
        Address details
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
        <span className="form-label">
          Address <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="branchAddress">
          <TextArea rows={4} placeholder="Branch address" required />
        </Form.Item>

        <div style={{ float: 'right', display: 'flex' }}>
          <Button size="middle" type="primary" htmlType="submit">
            submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ThirdForm;
