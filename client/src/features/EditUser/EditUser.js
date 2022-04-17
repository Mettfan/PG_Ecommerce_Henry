import '../Register/index.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {updateUser}  from '../../redux/actions/userActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


const formSchema = Yup.object().shape({
    name: Yup.string()
        .required("Este campo es requerido")
        .max(30, "Máximo 30 carácteres")
        .min(2, "Mínimo 2 carácteres")
        .matches(RegExp(/^[a-z A-Z]+$/), "El nombre debe tener solo letras"),
    lastName: Yup.string()
        .required("Este campo es requerido")
        .max(30, "Máximo 30 carácteres")
        .min(2, "Mínimo 2 carácteres")
        .matches(RegExp(/^[a-z A-Z]+$/), "El apellido debe tener solo letras"),
    email: Yup.string()
        .required("Este campo es requerido")
        .max(50, "Máximo 50 carácteres")
        .min(8, "Mínimo 8 carácteres")
        .matches(RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/), "El email no es válido"),
    
    dni: Yup.string()
        .required("Este campo es requerido")
        .max(20, "Máximo 20 carácteres")
        .min(8, "Mínimo 8 carácteres"),
    born: Yup.string()
        .required("Este campo es requerido"),
    
    province: Yup.string()
        .required("Este campo es requerido")
        .max(30, "Máximo 30 carácteres")
        .min(2, "Mínimo 2 carácteres")
        .matches(RegExp(/^[a-z A-Z]+$/), "Debe tener solo letras"),
    address: Yup.string()
        .required("Este campo es requerido")
        .max(30, "Máximo 30 carácteres")
        .min(2, "Mínimo 2 carácteres")
        .matches(RegExp(/[A-Za-z0-9]+/g), "Incluir el nombre y número"),
    phone: Yup.string()
        .required("Este campo es requerido")
        .max(20, "Máximo 20 carácteres")
        .min(8, "Mínimo 8 carácteres"),
    gender: Yup.string(),
});

const formOptions = { resolver: yupResolver(formSchema) };

export default function EditUser  () {

    const { logout, isAuthenticated, user } = useAuth0();
    const nav = useNavigate();

    const userValidated = useSelector(state => state.userReducer.status.user);
    const isUserAuthenticated = isAuthenticated || userValidated;

    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit, reset } = useForm(formOptions);
    

    const onSubmit = (data) => {
        console.log('data', data);
        dispatch(updateUser(data));
        reset();
        nav('/user/profile');
    };

    return (
        <div className="container-register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container-index">
                    <div className="form-container">
                        <div className="title">Modificar mis datos</div>
                        <p className="register-subtitle">(* campos requeridos)</p>
                        <div className="form-group-one">
                            <div className="labelAndInput">
                                <label className="input-label">*Nombre: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="name"
                                    placeholder= {user?.name || userValidated.name} 
                                    value={user?.name || userValidated.name}
                                    {...register('name')}
                                />
                                {<div className="form-register-errors">{errors.name?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*Apellido: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="lastName"
                                    placeholder= {user?.lastName || userValidated.lastName} 
                                    value={user?.lastName || userValidated.lastName}
                                    {...register('lastName')}
                                />
                                {<div className="form-register-errors">{errors.lastName?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*Email: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="email"
                                    placeholder= {user?.email || userValidated.email} 
                                    value={user?.email || userValidated.email}
                                    {...register('email')}
                                />
                                {<div className="form-register-errors">{errors.email?.message}</div>}
                            </div>
                            
                            <div className="labelAndInput">
                                <label className="input-label">*DNI: </label>
                                <input
                                    className="input-register"
                                    type="number"
                                    name="dni"
                                    placeholder= {user?.dni || userValidated.dni} 
                                    value={user?.dni || userValidated.dni}
                                    {...register('dni')}
                                />
                                {<div className="form-register-errors">{errors.dni?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*Fecha de Nacimiento: </label>
                                <input
                                    className="input-register"
                                    type="date"
                                    name="born"
                                    placeholder= {user?.born || userValidated.born} 
                                    value={user?.born || userValidated.born}
                                    {...register('born')}
                                />
                                {<div className="form-register-errors">{errors.born?.message}</div>}
                            </div>
                            
                            
                            <div className="labelAndInput">
                                <label className="input-label">*Localidad: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="province"
                                    placeholder= {user?.province || userValidated.province} 
                                    value={user?.province || userValidated.province}
                                    {...register('province')}
                                />
                                {<div className="form-register-errors">{errors.province?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*Dirección: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="address"
                                    placeholder= {user?.address || userValidated.address} 
                                    value={user?.address || userValidated.address}
                                    {...register('address')}
                                />
                                {<div className="form-register-errors">{errors.address?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*Celular: </label>
                                <input
                                    className="input-register"
                                    type="number"
                                    name="phone"
                                    placeholder= {user?.phone || userValidated.phone} 
                                    value={user?.phone || userValidated.phone}
                                    {...register('phone')}
                                />
                                {<div className="form-register-errors">{errors.phone?.message}</div>}
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" value="Femenino" id="dot-1" {...register('gender')} />
                            <input type="radio" name="gender" value="Masculino" id="dot-2" {...register('gender')} />
                            <input type="radio" name="gender" value="Prefiero no decirlo" id="dot-3" {...register('gender')} />
                            <span className="gender-title">Género</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Femenino</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Masculino</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefiero no decirlo</span>
                                </label>
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


