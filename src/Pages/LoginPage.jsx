import React from "react";
import Circle from "../Images/circle.svg";
import Circle1 from "../Images/circle-1.svg";
import Man from "../Images/man.svg";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./Common.css";

export default function LoginPage() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className="App">
      <div className="container-large">
        <div className="login-cont">
          <div className="login">
            <div className="login-left">
              <img src={Man} id="login-man" />
              <img src={Circle} id="login-circle" />
              <img src={Circle1} id="login-circle-1" />
            </div>
            <div className="login-right">
              <img src={Circle} id="login-circle-2" />
              <img src={Circle1} id="login-circle-3" />
              <div className="login-form-cont">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  style={{
                    maxWidth: "100%",
                  }}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input size="large" prefix={<UserOutlined style={{color:'rgba(0, 0, 0, 0.25)'}} />} />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password size="large" prefix={<LockOutlined style={{color:'rgba(0, 0, 0, 0.25)'}} />} />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                    //   offset: 8,  its a type of margin
                      span: 24,
                    }}
                  >
                    <Button size="large" type="primary" block style={{backgroundColor:'#1C1A5E'}}>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
