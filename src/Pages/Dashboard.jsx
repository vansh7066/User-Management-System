import React,{useState,useEffect} from 'react'
import './dashboard.css'
import Navbar from '../Components/Navbar'
// import { Outlet } from 'react-router'

const Dashboard = () => {

  const [user,setUser] = useState("null");

    useEffect(() => {
        
       const curr_user = JSON.parse(localStorage.getItem("user"));
       setUser(curr_user);
       console.log(curr_user)
    }, [])

  return (<>
    <Navbar />
    <div className='dashboard'>
      <h1>Welcome {user.username} To The Dashboard</h1>
    </div>
    </>
  )
}

export default Dashboard