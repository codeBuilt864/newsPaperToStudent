import React from 'react'

const Login = () => {
    return (
        <div className='login-page'>
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
            <button className='btn-login' onClick={handleSubmit}>Login</button>
        </div>
      )
}

export default Login