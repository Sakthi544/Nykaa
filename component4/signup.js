import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import './uppage.css';
function App()  
{
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
        <div className='background-pink'>
            <div className='account-name'>
                <h2 className='form-title'>Create an account</h2>
                <form action="#"className='input-box'>
                    <div className='input-wrapper'>
                        <input type="name" placeholder='Enter Your Username'  className='input-fire' required/><FaUserCircle className='umpl' />
                    </div>
                    <div className='input-wrapper'>
                        <input type="email" placeholder='Enter Your Email'  className='input-fire' required/><IoIosMail className='umpl'/>
                    </div>
                    <div className='input-wrapper'>
                        <input type="number" placeholder='Enter Your Phone Number'  className='input-fire' required/><FaPhoneAlt className='umpl'/>
                    </div>
                    <div className='input-wrapper'>
                        <input type="password"  value={password} onChange={handlePasswordChange} placeholder='Enter Your Password'  className='input-fire' required/><FaLock className='umpl'/>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </div>
                    <button className='button-up'>SignUp</button>
                </form>

                <p className='or-with'>Or With</p>
                <div className='google-facbook'>
                    <button className='soc-button'>< FaFacebookF  className='font-design'/>Signup with Facebook</button>
                    <button className='soc-button'><FcGoogle  className='font-design'/>Signup with Google</button>

                </div>
                <div className='bottom-account'>
                   <b>Already have an account?<a href="#" className='forgot-pass'>Login</a></b>
                </div>
           </div>
        </div>
    );
}
export default App;