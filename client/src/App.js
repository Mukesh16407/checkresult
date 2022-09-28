import { Route, Routes } from "react-router-dom";
import {Register} from './pages/employees/register'
import "./styles/theme.css";
import "./styles/layout.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/employees/Login";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div  >
       <Toaster />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
