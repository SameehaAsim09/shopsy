import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export default function LoginSingnUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const continueHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      password: password,
    }
    console.log(data);
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' onChange={nameHandler} />
          <input type="email" placeholder='Your email' onChange={emailHandler} />
          <input type="password" placeholder='Your Password' onChange={passwordHandler} />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to your terms & Privacy policy.</p>
        </div>
        <button onClick={continueHandler}>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span> Login here</span></p>
      </div>
    </div>
  )
}

