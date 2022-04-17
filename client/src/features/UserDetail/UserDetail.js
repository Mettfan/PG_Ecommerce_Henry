import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions/userActions";
import './UserDetail.css';
import Cookies from "universal-cookie";
export default function UserDetail(props) {
    let cookie = new Cookies()


    const { logout, isAuthenticated, user } = useAuth0();
    const nav = useNavigate();
  
    const status = cookie.get('user')
    // const userValidated = useSelector(state => state.userReducer.status.user);
    const userValidated = status.user
    const isUserAuthenticated = isAuthenticated || userValidated;

    const dispatch = useDispatch();
    function crearUsuario() {
        dispatch(createUser({
            name: user.given_name,
            lastName: user.family_name,
            email: user.email,
            picture: user.picture
        }));
        nav('/home');
    }

    function singOut() {
        cookie.set('user', '')
        alert('Realmente quieres irte? Te perderás todo lo bueno');
        logout();
    }

    return (
        <div className="container">
            {/* {JSON.stringify(cookies.get('data'))} */}
            <div className="profile-container">
                {isUserAuthenticated && <div>
                    <img className="userImgOnprofile" src={user?.picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU"}></img>
                    <div>{user?.name || userValidated.name} {user?.lastName || userValidated.lastName} </div>
                    <div>{user?.email || userValidated.email} </div>

                    {!userValidated &&
                        <div>
                            <p>¿Tus datos están correctos? </p>
                            <button className="loginbtn" onClick={crearUsuario}>CREAR CUENTA</button>
                        </div>
                    }
                    <Link to="/order">
                        <button >Mi compra</button>
                    </Link>
                    <Link to="/editar">
                        <button>Editar</button>
                    </Link>
                    <button className="logoutbtn" onClick={singOut}>LOGOUT</button>
                </div>
                }
            </div>
        </div>);
}