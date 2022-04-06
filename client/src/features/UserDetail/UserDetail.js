import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from "react-redux"
import { createUser } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UserDetail.css'

export default function UserDetail (props){
    const { logout, isAuthenticated, user } = useAuth0()
    const nav = useNavigate();

    let userValidated = useSelector(state => state.userReducer.status.user)

    let isUserAuthenticated = isAuthenticated || userValidated

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
        alert('Realmente quieres irte? Te perderás todo lo bueno');
        logout();
    }

    return (<>
        
        {isUserAuthenticated && <div>
            ¿Tus datos están correctos?
            <img  className="userImgOnprofile" src={user?.picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU" }></img>
            <div>{user?.name || userValidated.name } </div>
            <div>{user?.email || userValidated.email} </div>

            
            <button onClick={crearUsuario}>Crear</button>
        </div>
            }
        
        <button className="logoutbtn" onClick={singOut}>LOGOUT</button>
    
    
    
    </>)
}