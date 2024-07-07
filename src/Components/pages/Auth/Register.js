import React, { useState } from 'react';
import '../../../scss/_bootstrap.scss';
import './Login_Register.css';

import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

export default function Register({ setCurrentView }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleRegister = () => {

    if(!name){
      alert("Please enter your name")
      return
    }
    if(!emailRegex.test(email)){
      alert("Please enter correct email")
      return
    }
    if(!email){
      alert("Please enter your email")
      return
    }
    if(!password){
      alert("Please enter your password")
      return
    }
    if(password.length < 6){
      alert("Minimum length of password should be at least 6 characters")
      return
    }

    const formData = { name, email, password };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));

    setCurrentView('login');
  };

  return (
    <div className="containers">
      <div className="row">
        <div className="col">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                placeholder="Enter name"
                type="text"
                name="Full Name"
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                placeholder="Enter password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="already-user">
        Already a user? <span onClick={() => setCurrentView('login')}>Click here to Login!</span>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}
