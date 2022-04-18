
// import '../Register/index.css';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import {updateUser}  from '../../redux/actions/userActions';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import { useSelector } from "react-redux";
// import { useState } from 'react';


// const formSchema = Yup.object().shape({
//     name: Yup.string()
//         .required("Este campo es requerido")
//         .max(30, "Máximo 30 carácteres")
//         .min(2, "Mínimo 2 carácteres")
//         .matches(RegExp(/^[a-z A-Z]+$/), "El nombre debe tener solo letras"),
//     lastName: Yup.string()
//         .required("Este campo es requerido")
//         .max(30, "Máximo 30 carácteres")
//         .min(2, "Mínimo 2 carácteres")
//         .matches(RegExp(/^[a-z A-Z]+$/), "El apellido debe tener solo letras"),
//     email: Yup.string()
//         .required("Este campo es requerido")
//         .max(50, "Máximo 50 carácteres")
//         .min(8, "Mínimo 8 carácteres")
//         .matches(RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/), "El email no es válido"),
    
//     dni: Yup.string()
//         .required("Este campo es requerido")
//         .max(20, "Máximo 20 carácteres")
//         .min(8, "Mínimo 8 carácteres"),
//     born: Yup.string()
//         .required("Este campo es requerido"),
    
//     province: Yup.string()
//         .required("Este campo es requerido")
//         .max(30, "Máximo 30 carácteres")
//         .min(2, "Mínimo 2 carácteres")
//         .matches(RegExp(/^[a-z A-Z]+$/), "Debe tener solo letras"),
//     address: Yup.string()
//         .required("Este campo es requerido")
//         .max(30, "Máximo 30 carácteres")
//         .min(2, "Mínimo 2 carácteres")
//         .matches(RegExp(/[A-Za-z0-9]+/g), "Incluir el nombre y número"),
//     phone: Yup.string()
//         .required("Este campo es requerido")
//         .max(20, "Máximo 20 carácteres")
//         .min(8, "Mínimo 8 carácteres"),
//     gender: Yup.string(),
// });

// const formOptions = { resolver: yupResolver(formSchema) };

// export default function EditUser  () {
//     const dispatch = useDispatch();

    

//     const { logout, isAuthenticated, user } = useAuth0();
//     const nav = useNavigate();

//     const userValidated = useSelector(state => state.userReducer.status.user);
//     const isUserAuthenticated = isAuthenticated || userValidated;

    
//     const { register, formState: { errors }, handleSubmit, reset } = useForm(formOptions);
    
//     const[input, setInput] = useState({
//         // name: user?.name || userValidated?.name,
//         // lastName: user?.lastName || userValidated?.lastName,
//         // email: user?.email || userValidated?.email,
//         // dni: user?.dni || userValidated?.dni,
//         // phone: user?.phone || userValidated?.phone,
//         // address: user?.address || userValidated?.address,
//         // province: user?.province || userValidated?.province,
//         name:'',
//         lastName: '',
//         email: '',
//         dni: '',
//         phone: '',
//         address: '',
//         province: '',
       
//     })
//     //console.log(input)
    
//     function handlerOnChange (e){
//         setInput({
//             ...input,
//             [e.target.name]:e.target.value
//         })
//     }

//     const onSubmit = (input) => {
//         dispatch(updateUser(input));
//         reset();
//         nav('/user/profile');
//     };

//     return (
//         <div className="container-register-form">
//             <form handlerSubmit={onSubmit} >
//                 <div className="container-index">
//                     <div className="form-container">
//                         <div className="title">Modificar mis datos</div>
//                         <p className="register-subtitle">(* campos requeridos)</p>
//                         <div className="form-group-one">
//                             <div className="labelAndInput">
//                                 <label className="input-label">*Nombre: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="text"
//                                     name="name"
//                                     value={input.name}
//                                     //placeholder= {user?.name || userValidated?.name} 
//                                    // {...register('name')}
//                                 />
//                                 {<div className="form-register-errors">{errors.name?.message}</div>}
//                             </div>
//                             <div className="labelAndInput">
//                                 <label className="input-label">*Apellido: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="text"
//                                     name="lastName"
//                                     value={input.lastName}
//                                     //placeholder= {user?.lastName || userValidated?.lastName} 
//                                     {...register('lastName')}
                                    
//                                 />
//                                 {<div className="form-register-errors">{errors.lastName?.message}</div>}
//                             </div>
//                             <div className="labelAndInput">
//                                 <label className="input-label">*Email: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="text"
//                                     name="email"
//                                     value={input.email}
//                                     // placeholder= {user?.email || userValidated?.email}
//                                     //value= {user?.email || userValidated?.email}
//                                     //{...register('email')}
                                    
//                                 />
//                                 {<div className="form-register-errors">{errors.email?.message}</div>}
//                             </div>
                            
//                             <div className="labelAndInput">
//                                 <label className="input-label">*DNI: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="number"
//                                     name="dni"
//                                     value={input.dni}
//                                     //placeholder= {user?.dni || userValidated?.dni} 
//                                     {...register('dni')}
                                    
//                                 />
//                                 {<div className="form-register-errors">{errors.dni?.message}</div>}
//                             </div>
//                             <div className="labelAndInput">
//                                 <label className="input-label">*Dirección: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="text"
//                                     name="address"
//                                     value={input.address}
//                                     //placeholder= {user?.address || userValidated?.address} 
//                                     {...register('address')}
                                    
//                                 />
//                                 {<div className="form-register-errors">{errors.address?.message}</div>}
//                             </div>
                            
//                             <div className="labelAndInput">
//                                 <label className="input-label">*Provincia: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="text"
//                                     name="province"
//                                     value={input.province}
//                                     //placeholder= {user?.province || userValidated?.province} 
//                                     {...register('province')}
                                    
//                                 />
//                                 {<div className="form-register-errors">{errors.province?.message}</div>}
//                             </div>
                            
//                             <div className="labelAndInput">
//                                 <label className="input-label">*Celular: </label>
//                                 <input onChange={(e)=>handlerOnChange(e)}
//                                     className="input-register"
//                                     type="number"
//                                     name="phone"
//                                     value={input.phone}
//                                     //placeholder= {user?.phone || userValidated?.phone} 
//                                     {...register('phone')}
                                    
//                                 />
//                                 {<div className="form-register-errors">{errors.phone?.message}</div>}
//                             </div>
//                         </div>
                        
//                         <div className="form-submit">
//                             <input
//                                 type="submit"
//                                 value="EDITAR"
//                             />
//                         </div>
                        
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

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
    if(!input.name){
        errors.name = "Complete el nombre";
    }
    if(!input.lastName){
        errors.lastName = " Complete el apellido";
    }
    if(!input.email){
        errors.email = " Complete el email";
    }
    if(!input.dni){
        errors.dni = " Complete el dni";
    }
    if(!input.address){
        errors.address = " Complete la dirección";
    }
    if(!input.province){
        errors.province = " Complete la provincia";
    }
    if(!input.postal){
        errors.postal = " Complete el código postal";
    }
    if(!input.phone){
        errors.phone = " Complete el celular";
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
        phone: user?.phone || userValidated?.phone,
        address: user?.address || userValidated?.address,
        province: user?.province || userValidated?.province,
        postal: user?.postal || userValidated?.postal,
        // name:'',
        // lastName: '',
        // email: '',
        // dni: '',
        // phone: '',
        // address: '',
        // province: '',
       
    })


//     //console.log(input)
    
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
                if(!input.name || !input.lastName || !input.email || !input.address || !input.province || !input.phone || !input.dni){
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
                                    />  {errors.name && <p >{errors.name}</p>}
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
                                {errors.lastName && <p >{errors.lastName}</p>}
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
                                {errors.email && <p >{errors.email}</p>}
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
                                {errors.dni && <p >{errors.dni}</p>}
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
                                {errors.province && <p >{errors.province}</p>}
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
                                {errors.postal && <p >{errors.postal}</p>}
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
                                {errors.phone && <p >{errors.phone}</p>}
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


