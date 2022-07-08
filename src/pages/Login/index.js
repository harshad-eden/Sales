import React, { useState } from 'react';
import styles from './index.module.css';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('values', values);

    try {
      const user = await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log(user);
      localStorage.setItem('auth', 'token');
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="icons/logo.png" className={styles.logo} />
        <Form form={form} className="wFull" name="basic" onFinish={onFinish}>
          <label className="fieldLabel" htmlFor="email">
            Email
          </label>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              type="email"
              className="customAntInput"
              size="large"
            />
          </Form.Item>

          <label className="fieldLabel" htmlFor="password">
            Password
          </label>
          <Form.Item
            className="mbZero"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="customAntInput"
              size="large"
            />
          </Form.Item>
        </Form>
        <div className={styles.submitBtn}>
          <Button
            onClick={() => form.submit()}
            className="custom-ant-button"
            shape="round"
            style={{ width: '85%' }}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
