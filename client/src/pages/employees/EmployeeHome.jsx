import { Col, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';


export const EmployeeHome = () => {
    const navigate = useNavigate();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
        <Row gutter={[20, 20]}>
            <Col span={12}>
                <div  className="p-5 primary-border card w-300 cursor-pointer align-items-center justify-content-center gap-3"
                onClick={() => {
                 navigate("/employee/students");
            }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
              alt=""
              height={50}
              width={50}
            />
               <h1>Students</h1>
            </div>
            </Col>
            <Col span={12}>
                <div  className="p-5 primary-border card w-300 cursor-pointer align-items-center justify-content-center gap-3"
                onClick={() => {
                 navigate("/employee/results");
            }}>
            <img
              src="https://png.pngitem.com/pimgs/s/340-3408941_analyzing-results-icon-for-results-png-transparent-png.png"
              alt=""
              height={50}
              width={50}
            />
              <h1>Results</h1>
            </div>
            </Col>

        </Row>
    </div>
  )
}
