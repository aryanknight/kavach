import React, { useState } from "react";
import Circle from "../Images/circle.svg";
import Circle1 from "../Images/circle-1.svg";
import Man from "../Images/man.svg";
import { Form, Input, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { auth } from "../firebase";
import "./Common.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { update } from "../Redux/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential.user);
        const user = userCredential.user;
        dispatch(update(user));
        navigate("/home");
      })
      .catch((error) => {
        openNotification("bottomRight");
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.error({
      message: `Invalid Credentials`,
      placement,
    });
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
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      prefix={
                        <UserOutlined
                          style={{ color: "rgba(0, 0, 0, 0.25)" }}
                        />
                      }
                    />
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
                    <Input.Password
                      size="large"
                      prefix={
                        <LockOutlined
                          style={{ color: "rgba(0, 0, 0, 0.25)" }}
                        />
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      //   offset: 8,  its a type of margin
                      span: 24,
                    }}
                  >
                    {/* <Button
                      size="large"
                      type="primary"
                      block
                      style={{ backgroundColor: "#1C1A5E" }}
                      onClick={e=>console.log("jhf")}
                    >
                      Login
                    </Button> */}

                    <input type="submit" className="login-btn" value="Log in" />
                  </Form.Item>
                </Form>
                {contextHolder}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
