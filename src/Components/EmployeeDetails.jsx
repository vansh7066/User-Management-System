import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'

const EmployeeDetails = () => {

    const [user,setUser] = useState("null")

    useEffect(() => {
      const curr_user = JSON.parse(localStorage.getItem("user"));
      setUser(curr_user);
      console.log("inside Profile", curr_user)
    }, [])

  return (
    <>
    <Navbar />
    <br />
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <h1>The Employee Details Are </h1>
    <h3>Name: {user.username}</h3>
    <h3>Email ID: {user.email}</h3>
    </div>
    </>
  )
}

export default EmployeeDetails