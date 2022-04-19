import { React } from 'react'
import '../CardSlim/CardSlim.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFavorite } from '../../redux/actions/favoriteActions.js';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'universal-cookie';


//agregar descuento en productos
function CardSlim({ image, name, size, color, stock, price, index, discount, id }) {
  const dispatch = useDispatch()
  const subtotal = Number(((1-(discount/100))*price).toFixed(2));
  let cookie = new Cookies()
  const userValidated =  cookie.get('user')?.user
  const {  isAuthenticated, user  } = useAuth0()
  const usuario = userValidated || user

  // const data = [index, subtotal];  

  const handleDeleteFav = (e) => {
    //eliminar de la db también
    e.preventDefault();
    dispatch(deleteProductFavorite({ productId: Number(id), email: usuario?.email}))
  }

  return (
    <div className="card-slim-container">
      <div className="card-slim-1">
        <div className="img-slim-card">
          <img className="img-slim" src={ image } alt="imagen rota"></img>
        </div>
        <div className="card-slim-information">
          <div className="name-size">
            <p>{ name }</p>
            <p>Talle: { size }</p>
            <p>Color: { color }</p>
          </div>
          <div className="quantity-stock">
            <p className="stock-available">{ stock } disponibles</p>
          </div>         
        </div>
          <div className="price-slim">
            <div>
              {/* {
                discount 
                ? */}
                <div className="price-discount-slim">
                <p>{ discount }%</p>
                <strike>${ (price).toFixed(2) }</strike>
              </div>
                {/* : 
                null
              } */}
            </div>
            <p className="price-slim-card">${ subtotal }</p>
          </div>
      </div>
      <div className="card-slim-2">
        <Link to={`/productos/${id}`} style={{textDecoration: 'none', color: 'black'}}>
          <button className="btn-delete-cart"  >Ver detalle</button>
        </Link>
          <button onClick={(e) => handleDeleteFav(e)} className="btn-delete-cart">Eliminar de Favoritos</button>
      </div>
      <hr/>
    </div>
  )
}

export default CardSlim