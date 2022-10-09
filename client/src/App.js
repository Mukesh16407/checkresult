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
import {Spinner} from './components/Spinner'
import { useSelector } from "react-redux";
import { PublicRoute } from "./components/PublicRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ResultCheck } from "./pages/ResultCheck";
import { EditStudents } from "./pages/employees/EditStudent";
import { EditResult } from "./pages/employees/EditResult";

function App() {
  const { loading } = useSelector((state) => state.alert);
  return (
    <div  >
      {loading ? <Spinner /> : null}
       <Toaster />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result/:resultId" element={<ResultCheck />} />
        <Route path="/login" element={  <PublicRoute><Login/></PublicRoute>}/>
        <Route path="/register" element={  <PublicRoute><Register/></PublicRoute>}/>
        <Route path="/employee" element={ <ProtectedRoute><EmployeeHome /></ProtectedRoute>} />
        <Route path="/employee/students" element={ <ProtectedRoute><Students /></ProtectedRoute>} />
        <Route path="/employee/students/add" element={ <ProtectedRoute><AddStudent /></ProtectedRoute>} />
        <Route path="/employee/students/edit/:rollNo" element={<ProtectedRoute><EditStudents /></ProtectedRoute>}/>
        <Route path="/employee/results" element={ <ProtectedRoute><Results /></ProtectedRoute>} />
        <Route path="/employee/results/add" element={<ProtectedRoute><AddResult /></ProtectedRoute>} />
        <Route path="/check-result"element={<ProtectedRoute><ResultCheck/> </ProtectedRoute>}/>
        <Route path="/employee/results/edit/:resultId"element={<ProtectedRoute><EditResult/></ProtectedRoute> } />
       
      </Routes>
    </div>
  );
}

export default App;
