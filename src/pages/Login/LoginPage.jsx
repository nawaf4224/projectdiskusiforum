import React from 'react'
import './LoginPage.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return (
        <div className='wrapper'>
            <form action=''>
                <h1> Login </h1>
                <div className='input-box'>
                    <input type='text' placeholder='username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forget">
                    <label><input type="checkbox" /> remember me </label>
                    <a href='#'>forget password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>


        </div>
    )
}

export default LoginPage
