import React from 'react'
import { Form, Input } from "antd";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="primary d-flex align-items-center justify-content-center h-screen">
        <Form layout="vertical w-400 white p-4">
        <h1 className="text-medium"><b>CHECK RESULTS</b></h1>
        <hr />
        <h1 className="text-medium">Employee - Login</h1>
        <hr />
        <Form.Item name="employeeId" label="Employee ID">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <button className="primary text-white px-5 my-2 w-100">Login</button>
        <Link to="/register" className="text-mini text-black">
          Not yet Registered , Click Here To Register
        </Link>
        </Form>
    </div>
  )
}
