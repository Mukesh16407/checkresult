import { Col, Row } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="header d-flex justify-content-between align-items-center py-3">
      <h1 className="text-white">
          
          <b className="secondary-text">CHECK</b> RESULTS
        </h1>
        <div>
        <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </h1>
        </div>
      </div>
      {results.length > 0 ?(
        <Row gutter={[20, 20]}>
          <Col span={24}>
          <h1 className="text-large my-3">Welcome to CHECK RESULTS </h1>
          <h1 className="text-medium my-3">
              Select Your Examination From Below..{" "}
            </h1>
            <hr />
            {results.map((result) =>{
              return(
               <Col span={8}>
                <div className="card p-2 cursor-pointer primary-border"
                  onClick={() => {
                    navigate(`/result/${result._id}`);
                  }}>
                     <h1 className="text-medium">{result.examination}</h1>
                  <hr />
                  <h1 className="text-small">Class : {result.class}</h1>

                </div>
              
              );
            })}

          </Col>

        </Row>

      ):(

      )}
    </div>
  )
}
