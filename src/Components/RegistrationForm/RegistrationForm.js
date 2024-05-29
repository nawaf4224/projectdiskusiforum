import React from 'react'
import './RegistrationForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className='container'>
      <form action=''>
        <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
            <div className='input-box'>
            <input type='text'placeholder='username'required/>
            <FaUser className='icon'/>
            </div>
            <div className='input-box'>
            <input type='email'placeholder='email id'required/>
            <FiMail className='icon'/>
            </div>
            <div className='input-box'>
            <input type='password'placeholder='password'required/>
            <FaLock className='icon'/>
            </div>            
            <div className='submit-container'>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
            </div>
          </div>
      </form>

      
    </div>
  )
}

export default LoginForm
