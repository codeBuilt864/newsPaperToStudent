import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/login.css';
import axios from 'axios';


axios.defaults.withCredentials = true;
const Login = ({setRoleVar}) => {
  const [firstname, setFirstname] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

const handleSubmit = () => {
  axios.post('http://localhost:3002/auth/login', {firstname, password,role})
  .then(res => {
    if(res.data.login && res.data.role === 'admin') {
      setRoleVar('admin')
      navigate('/')
    } else if(res.data.login && res.data.role === 'student') {
      setRoleVar('student')
        navigate('/')
    } else if(res.data.message === "student not registered" || res.data.message === "admin not registered" || res.data.message === "Wrong password") {
      alert('Firstname or Password is incorrect')
    }
    console.log(res)
  })
  .catch(err => console.log(err))
}

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Login</h2> <br />
        <div className="form-group">
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" placeholder='Ender Firstname'
          onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" placeholder='Ender Lastname'
          onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder='Email Name'
          onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="Password" placeholder='Ender Password'
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Conform Password:</label>
          <input type="Password" placeholder='Conform Password'
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
  )
}

export default Login