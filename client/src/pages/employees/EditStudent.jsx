import React, { useEffect, useState } from "react";
import { HideLoading, ShowLoading } from "../../Redux/alerts";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {PageTitle} from '../../components/PageTitle';
import{ StudentForm} from "../../components/StudentForm";

export const EditStudents=()=>{
 
 const [student, setStudent] = useState(null);

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const getStudent = async (values) => {

    try{
        dispatch(ShowLoading());
        const response = await axios.post(
            `/api/student/get-student/${params.rollNo}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          dispatch(HideLoading());
          if (response.data.success) {
            setStudent(response.data.data);
          } else {
            toast.error(response.data.message);
          }
    }catch(error){

        dispatch(HideLoading());
        toast.error(error.message);
    }
 }
 useEffect(() => {
    getStudent();
  }, []);

  const params = useParams();
    return(
        <div>
            <PageTitle title="Edit Student"/>
            <img src="https://cdn-icons-png.flaticon.com/512/2444/2444472.png"
              alt=""
              height={100}
              width={100}
              className="my-2"
              />
               {student && <StudentForm student={student} type="edit" />}
        </div>
    )
}