import './index.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import Cookies from 'universal-cookie';
import { useAuth0 } from '@auth0/auth0-react';


const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo es requerido")
    .max(50, "Máximo 50 carácteres")
    .min(8, "Mínimo 8 carácteres")
    .matches(RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/), "El email no es válido"),
  password: Yup.string()
    .required("Este campo es requerido")
});

const formOptions = { resolver: yupResolver(formSchema) };

const Login = (props) => {
  let nav = useNavigate();
  let dispatch = useDispatch();
  let status = useSelector(state => state.userReducer.status);
  //let token = status.token;
  const { register, formState: { errors }, handleSubmit } = useForm(formOptions);

  const { loginWithRedirect } = useAuth0()

  const onSubmit = async (data) => {

    let cookies = new Cookies()
    cookies.set('data', data)
    dispatch(login(data));
    nav('/home');
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-login-container">
          <div className="login-container">
            <div className="title-login">¿Ya tenés una cuenta? Inicia sesión aquí</div>
            <div className="form-group-login">
              <div className="login-labelAndInput">
                <label className="input-label-login">*Email: </label>
                <input
                  className="input-register"
                  type="text"
                  name="email"
                  {...register('email')}
                />
                {<div className="form-register-errors">{errors.email?.message}</div>}
              </div>
              <div className="login-labelAndInput">
                <label className="input-label-login">*Contraseña: </label>
                <input
                  className="input-register"
                  type="password"
                  name="password"
                  {...register('password')}
                />
                {<div className="form-register-errors">{errors.password?.message}</div>}
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
              <button className="register-btn" onClick={loginWithRedirect}>Google/Facebook</button>
            </div>
            <div className="title-register" >
              Si no tienes una cuenta puedes registrarte ahora
            </div>
            <Link to="/register">
              <button className='register-btn'>Registrarse</button>
            </Link>
          </div>
        </div>

      </form>
    </>
  );
};

export { Login };