

import React from 'react'
import { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {updateUser}  from '../../redux/actions/userActions';
import '../Register/index.css';



function validate(input){
    let errors = {};
    console.log(errors)
    if(!/^[a-z A-Z]+$/.test(input.name)){
        errors.name = "*Campo requerido";
    }
    if(!/^[a-z A-Z]+$/.test(input.lastName)){
        errors.lastName = "*Campo requerido";
    }
    if(!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(input.email)){
        errors.email = "*Campo requerido";
    }
    if(!/^[0-9]{8}$/.test(input.dni)){
        errors.dni = "*Campo requerido";
    }
    if(!/^[a-z A-Z]+$/.test(input.address)){
        errors.address ="*Campo requerido";
    }
    if(!/^[a-z A-Z]+$/.test(input.province)){
        errors.province ="*Campo requerido";
    }
    if(!/^[0-9]{4}$/.test(input.postal)){
        errors.postal = "*Campo requerido";
    }
    if(!input.phone){
        errors.phone = "*Campo requerido";
    }
    
    return errors;

}
export default function EditUser  () {
    const dispatch = useDispatch();

    

   const { logout, isAuthenticated, user } = useAuth0();
   const nav = useNavigate();

   const userValidated = useSelector(state => state.userReducer.status.user);
   const isUserAuthenticated = isAuthenticated || userValidated;

   const[errors, setErrors] = useState({});



    
    const[input, setInput] = useState({
        name: user?.name || userValidated?.name,
        lastName: user?.lastName || userValidated?.lastName,
        email: user?.email || userValidated?.email,
        dni: user?.dni || userValidated?.dni,
        address: user?.address || userValidated?.address,
        province: user?.province || userValidated?.province,
        postal: user?.postal || userValidated?.postal,
        phone: user?.phone || userValidated?.phone,
        
    })



    
function handlerOnChange (e){
                setInput({
                    ...input,
                    [e.target.name]:e.target.value
                })
                setErrors(validate({
                    ...input,
                    [e.target.name]:e.target.value
                }) )
            }

            function onSubmit(e){
                e.preventDefault();
                if(!input.name || !input.lastName || !input.email || !input.dni|| !input.address|| !input.province  || !input.postal|| !input.phone  ){
                alert("no completo todo el formulario!")}
                else{
                dispatch(updateUser(input))
                alert('Datos actualizados')
                setInput({
                    name:'',
                    lastName: '',
                    email: '',
                    dni: '',
                    phone: '',
                    address: '',
                    province: '',
                    postal: '',
                })
             nav('/user/profile')
            }}

            
    return (
        <div className="container-register-form">
            <form onSubmit={onSubmit} >
                <div className="container-index">
                    <div className="form-container">
                        <div className="title">Modificar mis datos</div>
                        <p className="register-subtitle">(* campos requeridos)</p>
                        <div className="form-group-one">
                            <div className="labelAndInput">
                                <label className="input-label">*Nombre: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    placeholder= {user?.name || userValidated?.name} 
                                    />  {errors.name && <p className="form-register-errors">{errors.name}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*Apellido: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="text"
                                    name="lastName"
                                    value={input.lastName}
                                    placeholder= {user?.lastName || userValidated?.lastName} 
                                    /> 
                                {errors.lastName && <p className="form-register-errors">{errors.lastName}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*Email: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="text"
                                    name="email"
                                    value={input.email}
                                    placeholder= {user?.email || userValidated?.email}
                                   />
                                {errors.email && <p className="form-register-errors">{errors.email}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*DNI: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="number"
                                    name="dni"
                                    value={input.dni}
                                    placeholder= {user?.dni || userValidated?.dni} 
                                />
                                {errors.dni && <p className="form-register-errors">{errors.dni}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*Dirección: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="text"
                                    name="address"
                                    value={input.address}
                                    placeholder= {user?.address || userValidated?.address} 
                                />
                                {errors.address && <p >{errors.address}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*Provincia: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="text"
                                    name="province"
                                    value={input.province}
                                    placeholder= {user?.province || userValidated?.province} 
                                />
                                {errors.province && <p className="form-register-errors">{errors.province}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*Código postal: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="number"
                                    name="postal"
                                    value={input.postal}
                                    placeholder= {user?.postal || userValidated?.postal} 
                                />
                                {errors.postal && <p className="form-register-errors">{errors.postal}</p>}
                                </div>
                                <div className="labelAndInput">
                                <label className="input-label">*Celular: </label>
                                <input onChange={(e)=>handlerOnChange(e)}
                                    className="input-register"
                                    type="number"
                                    name="phone"
                                    value={input.phone}
                                    placeholder= {user?.phone || userValidated?.phone} 
                                />
                                {errors.phone && <p className="form-register-errors">{errors.phone}</p>}
                                </div>
                                </div>
                                <div className="form-submit">
                                <input
                                type="submit"
                                value="EDITAR"
                                />
                             </div>
                         </div>
                   </div>
            </form>

        </div>
    );
};


