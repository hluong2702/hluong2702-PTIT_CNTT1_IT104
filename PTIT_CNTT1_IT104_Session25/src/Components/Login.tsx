import React from 'react'
import { Card, Form, Input, Button, Typography } from "antd";

export default function Login() {
    const [form] = Form.useForm();
  return (
    <div style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: 16
        }}>
            <Card style={{ width: 420 }}>
                <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
                    Login account
                </Typography.Title>

                <Form
                    form={form}
                >
                    <Form.Item
                        label="Your email"
                        name="email"
                    >
                        <Input placeholder="name@company.com" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" >
                            Login an account
                        </Button>
                    </Form.Item>
                </Form>

                <Typography.Paragraph style={{ textAlign: "center", marginBottom: 0 }}>
                    Already have an account? <a href="#hehe">Register here</a>
                </Typography.Paragraph>
            </Card>
        </div>
  )
}
