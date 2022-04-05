import './index.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';



const formSchema = Yup.object().shape({
  email: Yup.string()
    .required ("Este campo es requerido")
    .max ( 50, "Máximo 50 carácteres")
    .min ( 8, "Mínimo 8 carácteres")
    .matches (RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/), "El email no es válido"),
  password: Yup.string()
  .required ("Este campo es requerido")
    .max ( 16, "Máximo 16 carácteres")
    .min ( 8, "Mínimo 8 carácteres")
    .matches  ( RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/), "Debe tener numero, letra mayuscula y minuscula"),
})

const formOptions = { resolver : yupResolver(formSchema) };

const Login = (props) => { 
  const { register, formState: { errors }, handleSubmit } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log('data', data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-login-container">
          <div className="login-container">
            <div className="title-login">Loguearme</div>
              <div className="form-group-login">
                <div className="login-labelAndInput">
                  <label className="input-label-login">*Email: </label>
                  <input
                    className="input-register"
                    type="text"
                    name="email"
                    {...register('email')}
                  />
                  {<div className="form-register-errors">{ errors.email?.message }</div>}  
                </div>
                <div className="login-labelAndInput">
                  <label className="input-label-login">*Contraseña: </label>
                  <input
                    className="input-register"
                    type="password"
                    name="password"
                    {...register('password')}
                  />
                  {<div className="form-register-errors">{ errors.password?.message }</div>}  
                </div>
              </div>
              <div className="recover-pwd">
                <p>
                  ¿Olvidaste tu contraseña?
                </p>
              </div>  
              <div className="form-submit-login">
              <input 
                type="submit"
                value="INGRESAR"
                />
            <button type='button' className='register-button'>Registrarse</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export { Login }