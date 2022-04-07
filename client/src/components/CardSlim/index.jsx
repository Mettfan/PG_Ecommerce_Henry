import React from 'react'
import './index.css';
import { useState } from 'react';

const handleDelete = (e) => {
  console.log('eliminar')
}

let discount = 15;
//agregar descuento en productos
function CardSlim({ image, name, size, color, stock, price }) {
  const [count, setCount] = useState(1)

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
            <div className="Button-quantity">
              <button className="btn-btn" onClick={() => count >= 2 ? setCount(count -1) : console.log('no resta')}>-</button>
              <p>{count}</p>  
              <button className="btn-btn" onClick={() => count < stock ? setCount(count +1) : console.log('no suma')}>+</button>  
            </div>
            <p className="stock-available">{ stock } disponibles</p>
          </div>
        </div>
          <div className="price-slim">
            <div className="price-discount-slim">
              <p>{ discount }%</p>
              <strike>${ (price * count).toFixed(2) }</strike>
            </div>
            <p className="price-slim-card">${  (((1-(discount/100))*price)*count).toFixed(2) }</p>
          </div>
      </div>
      <div className="card-slim-2">
        <button className="btn-delete-cart" onClick={() => handleDelete()} >Eliminar del carrito</button>
      </div>
      <hr/>
    </div>
  )
}

export default CardSlim