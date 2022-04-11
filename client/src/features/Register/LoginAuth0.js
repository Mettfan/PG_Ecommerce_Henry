import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';

export const LoginAuth0 = () => {

    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    return (

        <div className="container-LoginAuth0">
            <div className="title">
                Registro Rápido... No hay tiempo que perder!
            </div>
            <button className='register-btn' onClick={loginWithRedirect} >Registrarse</button>
        </div>
    );
};
