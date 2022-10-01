/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShowLoading, HideLoading } from "../Redux/alerts";
import axios from "axios";
import { SetEmployee } from "../Redux/employees";
import { DefaultLayout } from "./DefaultLayout";

export const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [readyToRender, setReadyToRender] = useState(false);
  const dispatch = useDispatch();

  const geEmployeeData = async () => {
    try {
      dispatch(ShowLoading());
      const token = localStorage.getItem("token");
      dispatch(HideLoading());
      const response = await axios.post(
        "/api/employee/get-employee-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        dispatch(SetEmployee(response.data.data));
        setReadyToRender(true);
      }
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(HideLoading());
      navigate("/login");
    }
  };
  useEffect(() => {
    geEmployeeData();
  }, []);

  return readyToRender && <DefaultLayout>{props.children}</DefaultLayout>;
};
