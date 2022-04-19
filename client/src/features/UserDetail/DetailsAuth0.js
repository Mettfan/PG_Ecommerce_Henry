import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getUsers } from "../../redux/actions/userActions";
import Cookies from "universal-cookie";
import './UserDetail.css';

export default function DetailsAuth0() {

    const cookie = new Cookies();
    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const { logout, user } = useAuth0();
    const userAuth0 = user;
    cookie.get('user');

    // Me aseguro de que no haya usuarios repetidos en la DB
    const allUsers = useSelector((state) => state.userReducer.usuarios);
    const userExist = allUsers.filter((user) => user.email === userAuth0.email);

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
        cookie.set('user', '');
        alert('Realmente quieres irte? Te perderás todo lo bueno');
        logout();
    }

    return (
        <div className="container">
            <div className="profile-container">
                {userExist.length
                    ? <div>
                        <img className="userImgOnprofile" alt='img user' src={userAuth0?.picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU"}></img>
                        <div>{userAuth0?.name} {userAuth0?.lastName} </div>
                        <div>{userAuth0?.email} </div>
                        <Link to="/order/finder">
                            <button className="loginbtn">Mi compra</button>
                        </Link>
                        <Link to="/editar">
                            <button className="loginbtn">Editar</button>
                        </Link>
                        <button className="logoutbtn" onClick={singOut}>LOGOUT</button>
                    </div>

                    : < div >
                        <p>¿Tus datos están correctos? </p>
                        <img className="userImgOnprofile" alt="img user" src={userAuth0?.picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU"}></img>
                        <div>{userAuth0?.name} {userAuth0?.lastName} </div>
                        <div>{userAuth0?.email} </div>
                        <button className="loginbtn" onClick={crearUsuario}>CREAR CUENTA</button>
                    </div>
                }
            </div>
        </div>);
}