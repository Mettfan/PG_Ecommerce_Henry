import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './UserDetail.css';
import Cookies from "universal-cookie";
import DetailsAuth0 from "./DetailsAuth0";


export default function UserDetail(props) {

    let cookie = new Cookies();
    const status = cookie.get('user');
    const userDB = status.user;
    const nav = useNavigate();

    function singOut() {
        cookie.set('user', '');
        alert('Realmente quieres irte? Te perderás todo lo bueno');
        nav('/home');
    }

    return (
        <div className="container">

            {userDB
                ? <div>
                    <div className="profile-container">
                        <img className="userImgOnprofile" alt='img user' src={userDB?.picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU"}></img>
                        <div>{userDB?.name} {userDB?.lastName} </div>
                        <div>{userDB?.email} </div>
                        <Link to="/order/finder">
                            <button className="loginbtn">Mi compra</button>
                        </Link>
                        <Link to="/editar">
                            <button className="loginbtn">Editar</button>
                        </Link>
                        <button className="logoutbtn" onClick={singOut}>LOGOUT</button>
                    </div>
                </div>
                : <DetailsAuth0 />
            }
        </div>);
}