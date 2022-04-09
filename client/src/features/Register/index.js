import React from 'react';
import { LoginAuth0 } from './LoginAuth0';
import { LoginForm } from './LoginForm';
import './index.css';

const Register = () => {

  return (
    <div className="container-index">
      <LoginAuth0 />
      <LoginForm />
    </div>
  );
};

export { Register };