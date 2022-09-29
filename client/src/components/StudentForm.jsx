import React from 'react'
import { Col, Form, Row } from "antd";
export const StudentForm = () => {
  return (
    <div>
      <Form layout="vertical">
        <Row gutter={[10, 10]}>
        <Col span={8}>
            <Form.Item label="First Name" name="firstName">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Last Name" name="lastName">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Roll No" name="rollNo">
              <input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name="email">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone Number" name="phoneNumber">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Class" name="class">
              <input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-2">
          <button className="primary text-white px-5">Save</button>
        </div>

      </Form>
    </div>
  )
}