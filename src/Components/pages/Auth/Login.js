import React, { useState } from 'react';
import '../../../scss/_bootstrap.scss';
import './Login_Register.css';

import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

export default function Login({ setIsLoggedIn, setUserEmail, setCurrentView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.email === email && userData.password === password) {
      alert('Login successful!');
      setUserEmail(email);
      setIsLoggedIn(true);
      setCurrentView('welcome');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="containers">
      <div className="row">
        <div className="col">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                placeholder="Enter email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                placeholder="Enter password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="forgot-password">
        Forgot password? <span onClick={() => setCurrentView('forgotPassword')}>Click here!!</span>
      </div>
      <div className="new-user">
        New User? <span onClick={() => setCurrentView('register')}>Click here to Register!</span>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
