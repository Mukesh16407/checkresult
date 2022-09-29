import { Route, Routes } from "react-router-dom";
import {Register} from './pages/employees/register'
import "./styles/theme.css";
import "./styles/layout.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/employees/Login";
import { Toaster } from "react-hot-toast";
import { EmployeeHome } from "./pages/employees/EmployeeHome";
import { Students } from "./pages/employees/Students";
import { Results } from "./pages/employees/Results";
import { AddStudent } from "./pages/employees/AddStudent";
import { AddResult } from "./pages/employees/AddResult";
function App() {
  return (
    <div  >
       <Toaster />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/employee" element={<EmployeeHome />} />
        <Route path="/employee/students" element={<Students />} />
        <Route path="/employee/results" element={<Results />} />
        <Route path="/employee/students/add" element={<AddStudent />} />
        <Route path="/employee/results/add" element={<AddResult />} />
      </Routes>
    </div>
  );
}

export default App;
