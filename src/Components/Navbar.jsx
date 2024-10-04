import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.scss'
import Profile from './Profile';
import EmployeeDetails from './EmployeeDetails';

const Navbar = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState("null");

    useEffect(() => {
        
       const curr_user = JSON.parse(localStorage.getItem("user"));
       setUser(curr_user);
       console.log(curr_user)
    }, [])


  return (
    <div className="header-container">
        <div className="logo">
        <h2>Welcome {user.username}</h2>
        </div>
        <nav className="nav-links">
            <NavLink to="/profile" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Profile</NavLink>
            <NavLink to="/employee-details" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Employee Details</NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive?'active-link':'inactive-link')} >Logout</NavLink>
            {/* <span className="inactive-link">{user.username}</span> */}
        </nav>
    </div>
  )
}

export default Navbar