import React from 'react';

import '../../../scss/_bootstrap.scss'

export default function Welcome({ userEmail }) {
  return (
    <div className="welcome-container">
      <h1 className='text-center text-white'>Welcome!</h1>
      <p className='text-center text-white'>You are logged in as: {userEmail}</p>
    </div>
  );
}