import React from 'react';
import LoginButton from '../components/LoginButton';
import BracketsLogo from '../KTP_brackets_main.png';

const LoginPage = () => {
  return (
    <div className='page' style={{ flexDirection: 'row' }}>
      <div
        style={{
          backgroundColor: 'brown',
          width: '50%',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={BracketsLogo}></img>
      </div>
      <div
        style={{
          width: '50%',
        }}
      >
        Login
      </div>
    </div>
  );
};

export default LoginPage;
