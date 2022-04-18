import '../Register/index.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {updateUser}  from '../../redux/actions/userActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Cookies from 'universal-cookie';

const formSchema = Yup.object().shape({
     email: Yup.string(),
    
    
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
    postal : Yup.string()
        .required("Este campo es requerido")
        .max(20, "Máximo 8 carácteres")
        .min(8, "Mínimo 4 carácteres"),
    phone: Yup.string()
        .required("Este campo es requerido")
        .max(20, "Máximo 20 carácteres")
        .min(8, "Mínimo 8 carácteres"),
});

const formOptions = { resolver: yupResolver(formSchema) };

export default function EditSend  () {

    const { logout, isAuthenticated, user } = useAuth0();
    const nav = useNavigate();
    let cookie = new Cookies()
    // const userValidated = useSelector(state => state.userReducer.status.user);
    const userValidated = cookie.get('user').user;
    const isUserAuthenticated = isAuthenticated || userValidated;

    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit, reset } = useForm(formOptions);
    

    const onSubmit = (data) => {
        console.log('data', data);
        dispatch(updateUser(data));
        reset();
        nav('/user/products');
    };

    return (
        <div className="container-register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container-index">
                    <div className="form-container">
                        <div className="title">Datos de envio</div>
                        <p className="register-subtitle">(* campos requeridos)</p>
                        <div className="form-group-one">
                        <div className="labelAndInput">
                                <label className="input-label">*Email: </label>
                                <input
                                readOnly
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
                                <label className="input-label">*Localidad: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="province"
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
                                    {...register('address')}
                                />
                                {<div className="form-register-errors">{errors.address?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*C. Postal: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="postal"
                                    {...register('postal')}
                                />
                                {<div className="form-register-errors">{errors.postal?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">*Celular: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="phone"
                                    {...register('phone')}
                                />
                                {<div className="form-register-errors">{errors.phone?.message}</div>}
                            </div>
                        </div>
                        
                        
                        <div className="form-submit">
                            <input
                                type="submit"
                                value="Guardar direccion de envio"
                            />
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    );
};


