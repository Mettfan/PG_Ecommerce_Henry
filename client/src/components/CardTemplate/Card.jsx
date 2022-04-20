import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card(
    {image,
    name,
    id,
    price,
    discount}) {
  return (
    <div className="wrapper">
        <div className="card">
            <img alt="" src={image} className="card-image"/>
            <div className="card-container">

                <div className="top-left"> %{discount} </div>
            
            </div>
            <div className="info">
                <h1>{name}</h1>
                <fieldset>
                    <legend> %{discount} </legend>
                    <h3 className="cardGenreTitle">Discount</h3>
                    <small>Precio final:</small>
                    <p>${price} </p>
                </fieldset>
                <Link to={`/productos/${id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <button>Ver más</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card