import React, { useState } from 'react';
import '../../../scss/_bootstrap.scss';
import './Login_Register.css';

import email_icon from '../../Assets/email.png';

export default function ForgotPassword({ setCurrentView }) {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="containers">
      <div className="row">
        <div className="col">
          <div className="header">
            <div className="text">Forgot Password</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-login">
          Remember your password? <span onClick={() => setCurrentView('login')}>Go back to Login</span>
        </div>
      <div className="submit-container">
        <button className="submit" onClick={handleForgotPassword}>
          Submit
        </button>
      </div>
    </div>
  );
}
