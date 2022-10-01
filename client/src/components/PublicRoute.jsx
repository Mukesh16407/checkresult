/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const PublicRoute = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/employee");
        }
      }, []);
  return (
    <div>{props.children}</div>
  )
}
