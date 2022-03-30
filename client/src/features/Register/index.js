import './index.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required ("Este campo es requerido")
    .max ( 30, "Máximo 30 carácteres")
    .min ( 2, "Mínimo 2 carácteres")
    .matches (RegExp(/^[a-z A-Z]+$/), "El nombre debe tener solo letras"),
  lastname: Yup.string()
    .required ("Este campo es requerido")
    .max ( 30, "Máximo 30 carácteres")
    .min ( 2, "Mínimo 2 carácteres")
    .matches (RegExp(/^[a-z A-Z]+$/), "El apellido debe tener solo letras"),
  email: Yup.string()
    .required ("Este campo es requerido")
    .max ( 50, "Máximo 50 carácteres")
    .min ( 8, "Mínimo 8 carácteres")
    .matches (RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/), "El email no es válido"),
  confirmEmail: Yup.string()
    .required ("Este campo es requerido")
    .oneOf ([Yup.ref("email")], "El email ingresado no coincide "),
  DNI: Yup.string()
    .required ("Este campo es requerido")
    .max ( 20, "Máximo 20 carácteres")
    .min ( 8, "Mínimo 8 carácteres"),
  date: Yup.string()
    .required ("Este campo es requerido"),
  password: Yup.string()
    .required ("Este campo es requerido")
    .max ( 16, "Máximo 16 carácteres")
    .min ( 8, "Mínimo 8 carácteres")
    .matches  ( RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/), "Debe tener numero, letra mayuscula y minuscula"),
  confirmPassword: Yup.string()
    .required ("Este campo es requerido")
    .oneOf ([Yup.ref("password")], "La contraseña ingresada no coincide"),
  gender: Yup.string()
})

const formOptions = { resolver : yupResolver(formSchema) };

const Register = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log('data', data)
    reset();
  }

  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-register">
            <div className="form-container">
              <div className="title">Registrarme</div>
                <p className="register-subtitle">(* campos requeridos)</p>
                <div className="form-group-one">
                  <div className="labelAndInput">
                    <label className="input-label">*Nombre: </label>
                    <input
                      className="input-register"
                      type="text"
                      name="name"
                      {...register('name')}
                    />
                    {<div className="form-register-errors">{ errors.name?.message }</div>}  
                  </div>
                  <div className="labelAndInput">
                    <label className="input-label">*Apellido: </label>
                    <input
                      className="input-register"
                      type="text"
                      name="lastname"
                      {...register('lastname')}
                    />
                    {<div className="form-register-errors">{ errors.lastname?.message }</div>}  
                  </div>
                  <div className="labelAndInput">
                    <label className="input-label">*Email: </label>
                    <input
                      className="input-register"
                      type="text"
                      name="email"
                      {...register('email')}
                    />
                    {<div className="form-register-errors">{ errors.email?.message }</div>}  
                  </div>
                  <div className="labelAndInput">
                    <label className="input-label">*Confirmar email: </label>
                    <input
                      className="input-register"
                      type="text"
                      name="confirmEmail"
                      {...register('confirmEmail')}
                    />
                    {<div className="form-register-errors">{ errors.confirmEmail?.message }</div>}  
                  </div>  
                  <div className="labelAndInput">
                    <label className="input-label">*DNI: </label>
                    <input
                      className="input-register"
                      type="number"
                      name="DNI"
                      {...register('DNI')}
                    />
                    {<div className="form-register-errors">{ errors.DNI?.message }</div>}  
                  </div>
                  <div className="labelAndInput">
                    <label className="input-label">*Fecha de Nacimiento: </label>
                    <input
                      className="input-register"
                      type="date"
                      name="date"
                      {...register('date')}
                    />
                    {<div className="form-register-errors">{ errors.date?.message }</div>}  
                  </div>  
                  <div className="labelAndInput">
                    <label className="input-label">*Contraseña: </label>
                    <input
                      className="input-register"
                      type="password"
                      name="password"
                      {...register('password')}
                    />
                    {<div className="form-register-errors">{ errors.password?.message }</div>}  
                  </div>  
                  <div className="labelAndInput">
                    <label className="input-label">*Confirmar contraseña: </label>
                    <input
                      className="input-register"
                      type="password"
                      name="confirmPassword"
                      {...register('confirmPassword')}
                    />
                    {<div className="form-register-errors">{ errors.confirmPassword?.message }</div>}  
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
              value="CREAR MI CUENTA"
              />
          </div>
            </div>  
          </div>  
        </form>
      </div>
  )
}

export { Register }
