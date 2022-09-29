import { Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";

export const Results = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Examination",
      dataIndex: "examination",
      key: "examination",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="d-flex gap-3">
          <i className="ri-delete-bin-line"></i>
          <i
            className="ri-pencil-line"
            onClick={() => {
              navigate(`/employee/results/edit/${record._id}`);
            }}
          ></i>
        </div>
      ),
    },
  ];
  return (
    <div>
      <PageTitle title="Results" />
      <div className="d-flex justify-content-between align-items-center my-3">
        <input
          type="text"
          className="w-300 px-2"
          placeholder="search results"
        />
        <button
          className="primary text-white px-3"
          onClick={() => {
            navigate("/employee/results/add");
          }}
        >
          Add Result
        </button>
      </div>
      <Table columns={columns} dataSource={results} />
    </div>
  );
};
