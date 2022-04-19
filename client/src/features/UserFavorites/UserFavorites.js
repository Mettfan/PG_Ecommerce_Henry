import './index.css';
import { useEffect } from 'react';
import CardProductFav from "../../components/CardProductFav/CardProductFav";
// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from '../../redux/actions/favoriteActions';
import Cookies from "universal-cookie";

export default function ( ) {
    let cookie = new Cookies();
    const {  isAuthenticated, user  } = useAuth0()
    
    let userValidated = cookie.get('user')?.user;
    // let userValidated = useSelector( state => state.userReducer.status.user ) || cookie.get('user').user;
    console.log('cookie.get.user', cookie.get('user')?.user)
    // let isUserAuthenticated = isAuthenticated || userValidated
    console.log('userValidated', userValidated)

    const productsFavorites = useSelector( state => state.favoriteReducer.favoritesList)
    const dispatch = useDispatch()
    
    let usuario = userValidated || user
    
    useEffect(()=> {
        console.log('Favoritos usuario.email', usuario?.email)
        dispatch(getFavorites(usuario?.email))
     }, [])

    return (<>
        {productsFavorites && 
            <div className="fav-cart-container">
                <div className="into-container-fav">
                    <div className="cart-container-1">
                        <div className="title-container-fav">
                            <h2>FAVORITOS</h2>
                        </div>
                            { productsFavorites && productsFavorites?.map((product, i) => {
                            return <CardProductFav 
                            key= { i }
                            index= { i }
                            image= { product?.image }
                            name= { product?.name }
                            size= { product?.size }
                            color= { product?.color }
                            id= { product?.id }
                            stock= { product?.stock }
                            // discount= { product?.discount }
                            discount = { 0 }
                            price= { product?.price }
                            />
                        })}
                        </div>
                </div>
            </div>              
        }

    </>)
}