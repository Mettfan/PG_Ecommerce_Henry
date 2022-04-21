import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateRol } from '../../redux/actions/userActions';
import './UpdateRol.css'

export default function UpdateRol() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [permission, setPermission] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(updateRol(email, permission));
        alert('El cambio se ha producido con éxito');
     }

    console.log(email, permission)


  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='form-login-container'>
                <div className='login-container'>
                    <div className="title-login">Cambiar rol del usuario</div>
                    <div className='form-group-login'>
                        <div className='login-labelAndInput'>
                            <label className="input-label-login">Email del usuario: </label>
                            <input type="text" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='login-labelAndInput'>
                            <label className="input-label-login">Nuevo rol: </label>                           
                            <select onChange={e => setPermission(e.target.value)}>
                                <option value=''>--Seleccione--</option>
                                <option value='admin'>Administrador</option>
                                <option value='user'>Usuario</option>
                            </select>
                        </div>
                        <div className="form-submit-login">                            
                            <button className='register-btn' type='submit'>Cambiar rol</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}