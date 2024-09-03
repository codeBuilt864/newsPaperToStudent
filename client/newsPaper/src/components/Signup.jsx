import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/signup.css';
import axios from 'axios';
import '../css/signin.css'


axios.defaults.withCredentials = true;
const Signup = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [role, setRole] = useState('admin')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true)
    const res = await fetch("/api/auth/signup",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })  
    const data = await res.json();
    if(data.success === false){
      setLoading(false)
      setError(data.message) 
      return;
    }
    setLoading(false)
    setError(null)
    console.log(data)
    navigate('/login')
  } catch (error) {
    setLoading(false)
    setError(error.message)
  }
 
  }  

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Sign Up</h2> <br />
        <form onSubmit={handleSubmit} action="">

          <input type="text" placeholder='Ender Firstname' id='firstname'
          onChange={handleChange}/>

          <input type="text" placeholder='Ender Lastname' id="lastname"
          onChange={handleChange}/>

          <input type="email" placeholder='Email Name' id='email'
          onChange={handleChange}/>
  
          <input type="Password" placeholder='Ender Password' id="password"
          onChange={handleChange}/>
  
          <input type="Password" placeholder='Conform Password'
          onChange={handleChange}/>
        <button disabled={loading} className='btn-login'>{loading ? 'loading...' : 'sign up'}</button>
        </form>
        <div className="sign">
        <p>Have an account?</p>
        <Link to={"/login"}>
          <span className='sign-span'>Sign in</span>
        </Link>
      </div>
      {error && <p className='error'>{error}</p>}
      </div>
   
    </div>
    
  )
}

export default Signup