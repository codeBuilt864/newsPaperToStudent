import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/signup.css';
import axios from 'axios';
import '../css/signin.css'


axios.defaults.withCredentials = true;
const Login = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conformpassword, setConformPassword] = useState('')
  const [role, setRole] = useState('admin')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

const handleSubmit = async () => {
  e.preventDefault();
    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
    
    } catch (e) {
      console.error(e);
    }
  }  

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Sign Up</h2> <br />
        <div className="form-group">
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" placeholder='Ender Firstname' id='firstname'
          onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" placeholder='Ender Lastname' id="lastname"
          onChange={(e) => setLastname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder='Email Name' id='email'
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="Password" placeholder='Ender Password' id="password"
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Conform Password:</label>
          <input type="Password" placeholder='Conform Password'
          onChange={(e) => setConformPassword(e.target.value)}/>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Sign up</button>
        <div className="sign">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='sign-span'>Sign in</span>
        </Link>
      </div>
      </div>
   
    </div>
    
  )
}

export default Login