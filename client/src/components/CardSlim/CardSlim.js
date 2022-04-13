import React from 'react'
import './CardSlim.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuantityCart, deleteSubtotal } from '../../redux/actions/productActions';
import axios from 'axios';
import { deleteProductFromCart, DeleteProductFromShopping } from '../../redux/actions/shoppingCartActions';
import { useAuth0 } from '@auth0/auth0-react';



//ver si no tiene descuento
//agregar descuento en productos
function CardSlim({ image, name, size, color, stock, price, index, discount, id }) {
//   const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const subtotal = Number((((1-(discount/100))*price)*count).toFixed(2));

  const data = [index, subtotal];
let dispatch = useDispatch()
  useEffect(() => {
    dispatch(QuantityCart(data))
  },[dispatch, count]);

  const handleDelete = (e) => {
    //eliminar de la db también
    dispatch(deleteSubtotal(subtotal))
  }


  const statusCart = useSelector( state => state )
  const ProductosParaMostrar = statusCart.shoppingCartReducer.productos?.msg



  const {  isAuthenticated, user  } = useAuth0()
  let userValidated = useSelector( state => state.userReducer.status.user )
  console.log(String(userValidated?.email), 'userValidated')

  async function DeleteProductShoppingCart  (){ 

    
      await axios.delete('http://localhost:3001/usuario/shopping', { email: String(userValidated?.email) , productId: parseInt(id)})
      .then( response => {
        console.log(response.data)
        dispatch(deleteProductFromCart({ type: 'DELETE_PRODUCT', payload: response.data }))
      },
      (error) => console.log(error))


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
          {
            stock
            ?
          <div className="quantity-stock">
            <div className="Button-quantity">
              <button className="btn-btn" onClick={() => count >= 2 ? setCount(count -1) : console.log('no resta')}>-</button>
              <p>{count}</p>  
              <button className="btn-btn" onClick={() => count < stock ? setCount(count +1) : console.log('no suma')}>+</button>  
            </div>
            <p className="stock-available">{ stock } disponibles</p>
          </div>
            : 
            null
          } 
        </div>
          <div className="price-slim">
            <div>
              {/* {
                discount 
                ? */}
                <div className="price-discount-slim">
                <p>{ discount }%</p>
                <strike>${ (price * count).toFixed(2) }</strike>
              </div>
                {/* : 
                null
              } */}
            </div>
            <p className="price-slim-card">${ subtotal }</p>
          </div>
      </div>
      <div className="card-slim-2">
        <button onClick={() => DeleteProductShoppingCart()} className="btn-delete-cart"  >{!stock ? "Eliminar de Favoritos" : "Eliminar del carrito"}</button>
      </div>
      <hr/>
    </div>
  )
}

export default CardSlim