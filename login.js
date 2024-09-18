import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sign from '../component4/signup';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import './page.css';

function App() 
{
  const navigate =useNavigate();

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const validatePassword = (password) => {
      const minLength = 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      if (password.length < minLength) {
        return 'Password must be at least 8 characters long.';
      }
      if (!hasUpperCase) {
        return 'Password must contain at least one uppercase letter.';
      }
      if (!hasLowerCase) {
        return 'Password must contain at least one lowercase letter.';
      }
      if (!hasNumbers) {
        return 'Password must contain at least one number.';
      }
      if (!hasSpecialChar) {
        return 'Password must contain at least one special character.';
      }
      return '';
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const validationError = validatePassword(newPassword);
        setError(validationError);
      };
    return( 
        <div className='bor'>   
            <div className="innerside">
                <h2 className='form-title'>Login With</h2>  
                <div className='Social'>
                    <button className='soc-button'><FcGoogle  className='font-icon'/> Google</button>
                    <button className='soc-button'><FaApple  className='font-icon'/> Apple</button>
                </div>

                <div className='separator'><span>or</span></div>

                <form action="#" className='login-form'>
                    <div className='input-wrapper'>
                        <input type="email" placeholder='Email Address/Username' className='input-field' required/><MdMailOutline  className='mdfa'/>
                    </div> 
                    <div className='input-wrapper'>
                        <input type="password"  value={password} onChange={handlePasswordChange} placeholder='Password' className='input-field' required/> <FaLock  className='mdfa'/>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </div>   
                    <div  className='dan'>  
                       <a href="#" className='forgot-pass-link'>Forgot Password?</a>
                    </div>    
                        <button  className='login-button'>Log in</button>
                </form>
                <div className='bottom-account'>
                   <b>Don't have an account?<a href="#" className='forgot-pass-link' onClick={()=>navigate('/signup')}>SignUp</a></b>
                  
                </div>
            </div>
        </div>
       
    );
   

}
export default App;