import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export default function LoginSingnUp(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namerr, setNamerr] = useState(false)

  const nameHandler = (e) => {
    setName(e.target.value)
    setNamerr(e.target.value.trim().length >= 3 ? true: false);
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
    };
    
    setName('');
    setEmail('');
    setPassword('');
    props.onSubmitData(data);
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' onChange={nameHandler} />
          {!namerr && (<p className='error_msg'>* Name must be more than 3 characters</p>)}
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

