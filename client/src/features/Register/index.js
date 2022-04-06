import React from 'react';
import { LoginAuth0 } from './LoginAuth0';
import { LoginForm } from './LoginForm';
import './index.css';

const Register = () => {

  return (
    <div>
      <LoginAuth0 />
      <br />
      <LoginForm />
    </div>
  );
};

export { Register };