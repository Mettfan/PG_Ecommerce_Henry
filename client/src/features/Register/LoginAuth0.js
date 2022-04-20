import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';

export const LoginAuth0 = () => {

    const { loginWithRedirect } = useAuth0();

    return (

        <div className="container-LoginAuth0">
            <div className="title-Auth0">
                Registrarme con Google o Facebook
            </div>
            <button className='register-btn' onClick={loginWithRedirect} >Registrarme</button>
        </div>
    );
};
