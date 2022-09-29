import { Col, Form, Row } from "antd";
import React from "react";

export const ResultForm = () => {
  return (
    <div>
      <Form layout="vertical">
        <Row gutter={[10, 10]}>
          <Col span={16}>
            <Form.Item label="Examination" name="examination">
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8} />
          <Col span={8}>
            <Form.Item label="Date" name="date">
              <input type="date" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Class" name="class">
              <input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <hr />
      </Form>
    </div>
  );
};
