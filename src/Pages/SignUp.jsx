import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router'

const SignUp = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(input.email) == false) {
            alert("Please Provide an valid email")
            setError("Please provide a valid email")
        }
        else if (input.password !== input.confirmPassword) {
            setError("Password and confirm Password are not equal")
        }
        else {
            setError("");
            navigate("/login");
        }
        // setError("");
        // navigate("/login");
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className='header'>Register Now</div>
            <div className='inputs'>
                <div className="input">
                    <input  name='username' value={input.username}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" placeholder='Username' required/>
                </div>
                <div className="input">
                    <input name='email' value={input.email}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="email" placeholder='Email ID' required/>
                </div>
                <div className="input">
                    <input name='password' value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="password" placeholder='Password' required/>
                </div>
                <div className="input">
                    <input name='confirmPassword' value={input.confirmPassword}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="password" placeholder='Confirm Password' required/>
                </div>
            </div>
            <p className='already-account'>Already have an account? <a href='/login'>login here</a></p>
            <button>Register</button>
            <p className='error'>{error}</p>
            {/* style={{justifyContent:'center', alignItems: 'center', marginRight:'100px',color: 'red', fontWeight: '550',}} */}
        </div>
        </form>
    )
}

export default SignUp