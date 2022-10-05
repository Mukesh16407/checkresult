import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ResultCheck = () => {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [rollNo, setRollNo] = useState("");
  const [studentResult, setStudentResult] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  return (
    <div className="p-5">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="text-white">
          {" "}
          <b className="secondary-text">CHECK</b> RESULTS{" "}
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
      {result && (
        <div className="mt-3 p-3 card">
        <h1 className="text-small">Examination : {result.examination}</h1>
        <h1 className="text-small">Class : {result.class}</h1>
      </div>
      )}
       <hr />
    <div className="d-flex gap-3 p-3 card flex-row my-3">
    <input
          type="text"
          placeholder="Roll No"
          className="w-300"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
    />
     <button
          className="primary px-5 text-white"
         
        >
          Get Result
        </button>

    </div>
    {studentResult && (
        <div className="card p-3">
            <div>
            <h1 className="text-medium ">
              <b>
                Name : {studentResult.firstName} {studentResult.lastName}
              </b>
            </h1>
            </div>
            <hr />
            <table className="table table-bordered w-50">
                <thead>
                <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
              </tr>

                </thead>
                <tbody>
                {result.subjects.map((subject, index) => (
                <tr>
                  <td>{subject.name}</td>
                  <td>{subject.totalMarks}</td>
                  <td>{studentResult.obtainedMarks[subject?.name] || 0}</td>
                </tr>
              ))}
                </tbody>
            </table>
            <div  style={{
              backgroundColor: "#002B5B",
              width: "max-content",
            }}
            className="p-3 w-50">
                <h1 className="text-white text-center text-medium">
              Percentage : 
            </h1>

            </div>

        </div>
    )}
    </div>
  );
};
