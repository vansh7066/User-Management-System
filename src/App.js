import logo from './logo.svg';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Profile from './Components/Profile';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/" element={<SignUp />} />  
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/employee-details" element={<EmployeeDetails />} />
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;
