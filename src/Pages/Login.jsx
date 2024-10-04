import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate()

    const [error,setError] = useState('');

    const [input,setInput] = useState({
        email: "",
        password: ""
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(input.email)== false){
            alert("Please Provide a valid email")
            setError("Please provide a valid email")
        }
        else if(input.email === loggedUser.email && input.password === loggedUser.password){
            setError("");
            navigate("/dashboard")
        }
        else{
            // alert("Wrong email or password")
            setError('Email/Password is wrong');
        }
    }

  return (
    <form onSubmit={handleLogin}>
    <div className='container'>
        <div className='header'>Login</div>
        <div className='inputs'>
            <div className="input">
                <input name='email' value={input.email} 
                onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} type="email" placeholder='Email ID' required/>
            </div>
            <div className="input">
                <input name='password' value={input.password} 
                onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} type="password" placeholder='Password' required/>
            </div>    
        </div>
        <p>Forget Password?</p>
        <button>Login</button>
        <p className='errors'>{error}</p>
    </div>
    </form>
  )
}

export default Login