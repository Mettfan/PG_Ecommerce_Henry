import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/actions/userActions';
import './NewPassword.css'

export default function NewPassword() {

    const dispatch = useDispatch()
    const [ email, setEmail ] = useState('')
        console.log(email)

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(resetPassword(email));
        alert('Si el email está registrado en nuestra base de datos, se enviará una nueva contraseña.')
     }
    
  return (
    
    <>
        <form onSubmit={handleSubmit}>
            <div className='form-login-container'>
                <div className='login-container'>
                    <div className="title-login">¿Olvidaste tu contraseña? Coloca tu email</div>
                    <div className='form-group-login'>
                        <div className='login-labelAndInput'>
                            <label className="input-label-login">Tu Email: </label>
                            <input type="text" onChange={e => setEmail(e.target.value)} />
                        </div>
                            <div className='form-submit-login'>
                                <button className='register-btn' type='submit'>Nueva contraseña</button>
                            </div>
                    </div>
                </div>
            </div>
        </form>
    </>
    )
}