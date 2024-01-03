import React, { useState } from 'react'
import './NewsLetter.css'

export default function NewsLetter(props) {
  const[email, setEmail] = useState('')
  const emailHandler= (e) => {
    setEmail(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    const emailData = {
      email: email,
    };
    
    setEmail('')
    props.subcribeHandler(emailData)

  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email Id' onChange={emailHandler}/>
        <button onClick={submitHandler}>Subscribe</button>
      </div>
    </div>
  )
}
