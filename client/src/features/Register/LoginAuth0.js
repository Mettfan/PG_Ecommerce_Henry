import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/actions/userActions';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';

export const LoginAuth0 = () => {

    const dispatch = useDispatch();
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    if (isAuthenticated) {
        console.log(user);
        //dispatch(createUser());
    }


    return (

        <div className="form-container">
            <div className="title">
                Registro Rápido...
                No hay tiempo que perder
            </div>
            <button onClick={loginWithRedirect} >Registro express</button>
        </div>
    );
};
