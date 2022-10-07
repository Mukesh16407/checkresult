/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { PageTitle } from "../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../Redux/alerts";

export const Results = () => {
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getResults = async(values)=>{
     
    try{
      dispatch(ShowLoading());
      const response= await axios.post(
        "/api/results/get-all-results",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }

      );
      dispatch(HideLoading());
      if (response.data.success) {
        setResults(response.data.data);
      } else {
        toast.error(response.data.message);
      }

    }catch(error){
      dispatch(HideLoading());
      toast.error(error.message);

    }
  }

  const  deleteStudent =async(rollNo)=>{

    try{
      dispatch(ShowLoading());
      const response = await axios.post(
        `/api/student/delete-student/${rollNo}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        getResults();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

    }catch(error){
      dispatch(HideLoading());
      toast.error(error.message);
    }

  }

  useEffect(() => {
    getResults();
  }, []);

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
          <i className="ri-delete-bin-line"
          onClick={() => {
            deleteStudent(record.rollNo);
          }}></i>
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
