import React from 'react';
import BracketsLogo from '../KTP_brackets_main.png';

const SignupForm = () => {
  return (
    <>
      <div className='form-inputs'>
        <input placeholder='First name'></input>
        <input placeholder='Last Name'></input>
        <input placeholder='Phone Number'></input>
        <input placeholder='Passowrd'></input>
      </div>
      <div>
        <a>Log in</a>
        <a>Forgot Password</a>
      </div>
    </>
  );
};

const LoginForm = () => {
  return (
    <>
      <div className='forrm-inputs'>
        <input placeholder='Email'></input>
        <input placeholder='Password'></input>
      </div>
      <div>
        <a href='#'>Create an Account</a>
        <a href='#'>Forgot Password</a>
      </div>
    </>
  );
};

const LoginPage = () => {
  return (
    <div className='login page' style={{ flexDirection: 'row' }}>
      <div className='login-left'></div>
      <div className='login-right'>
        <div className='login-right-container'>
          <img src={BracketsLogo} alt=''></img>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
