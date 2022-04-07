import React from 'react'
import "./index.css";
import CardSlim from "../../components/CardSlim";
import { Link } from 'react-router-dom';
import { useState } from 'react';


//agregar descuento en modelo de producto en bd y para crear producto
var data = [
    {
        name: 'Nike Sportswear oversize - Mujer',
        description: 'Combina tu estilo con esta amplia sudadera con capucha de tejido French terry. Las costuras sobrehiladas y elevadas, junto con las intensas combinaciones de colores, resaltan su estructura tipo patchwork para aportar un toque innovador a tus básicos para el día a día.',
        size: 'S-M-L',
        color: 'Negro',
        stock: 1346,
        price: 74.99,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5aef494-2caa-4b56-a2b9-f886a08e2988/sportswear-sudadera-con-capucha-oversize-C1lS6b.png',
        category: 'Sudaderas',
        gender: 'Dama'
    },
    {
        name: 'Jordan Essentials - Sudadera de chándal',
        description: 'Luce un look básico con esta sudadera de chándal de tejido Fleece. Está confeccionada con un tejido French terry de alta densidad, cepillado para ofrecer suavidad, y cuenta con un ajuste oversize.',
        size: 'S-M-L',
        color: 'Sanddrift',
        stock: 2050,
        price: 79.99,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eec5b441-96a1-49d6-a4c2-72dd5fa23b7a/jordan-essentials-sudadera-de-chandal-de-tejido-fleece-ZS5qzn.png',
        category: 'Sudaderas',
        gender: 'Dama'
    },
    {
        name: 'Nike ACG Therma-FIT “Wolf Tree”',
        description: 'Vístete con la calidez premium de la parte de arriba Nike ACG Therma-FIT “Wolf Tree”. Cuenta con un ajuste holgado, amplio y suave. Los detalles discretos rinden homenaje a Smith Rock de Oregón, que sirvió de inspiración para el diseño de esta sudadera de tejido Fleece. Este producto está confeccionado al 100 % con poliéster reciclado y fibras de nylon recicladas.',
        size: 'S-M-L',
        color: 'Hazel Rush/Negro/Summit White',
        stock: 40,
        price: 134.99,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e230fcfd-2237-4c6e-9028-ee370f0894e2/acg-wolf-tree-sudadera-de-media-cremallera-con-estampado-4tMccj.png',
        category: 'Sudaderas',
        gender: 'Dama'
    }
]
//agregar cp en usuario (codigo postal)
var user = [
    {
        name: "Salma",
        lastName: "Hayek",
        gender: "Femenino",
        dni: "350000000",
        born: "06/08/1987",
        email: "correo@correo.com",
        address: "Barcelona 15",
        province: "Neuquen",
        phone: "026846321",
        cp: "1414",
        password: "1234qwer",
        permission: "user"
    }
]

console.log('user.name', user[0].name)

function ShoppingCart() {
    const [select, setSelect] = useState("Retiro por la tienda");
    const [count, setCount] = useState(3);
    
    const handleSelect = (e) => {
       console.log('e.target.value', e.target.value)
           setSelect(e.target.value);
    }

    const handleContinue = () => {
        console.log('CONTINUAR')
        setCount(0);
    }
    
  return (
    <div className="shopping-cart-container">
        <div className="into-container">
            <div className="cart-container-1">
                <div className="title-container">
                    <h2>¿Cómo querés recibir o retirar tu compra?</h2>
                    <select className="select-cart" onClick={(e) => handleSelect(e)}>
                        <option>Seleccionar opción</option>
                        <option>Retiro por la tienda</option>
                        <option>Enviar a mi domicilio</option>
                    </select>
                </div>
                <div>
                    {
                        select === "Enviar a mi domicilio"
                        ?  
                <div className="card-send">
                    <div className="img-send-card">
                      <img className="img-send" src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="imagen rota"></img>
                    </div>
                    <div className="cart-slim-information">
                      <div className="name-size">
                        <p>Direccion: { user[0].address }</p>
                        <p>CP: { user[0].cp } - { user[0].province }</p>
                        <p>{ `${(user[0].name) + " " +(user[0].lastName)}` } - { user[0].phone }</p>
                      </div>
                    </div>
                      <div className="cart-edit">
                        <div className="price-discount-slim">
                            <Link to="">
                            <p> Editar campo </p>
                            </Link>
                      </div>
                    </div>
                </div>
                    : null
                    }
                </div>
                <div>
                    {
                        data.length
                        ? data.map((product, i) => {
                            return <CardSlim 
                            key= { i }
                            image= { product.image }
                            name= { product.name }
                            size= { product.size }
                            color= { product.color }
                            stock= { product.stock }
                            discount= { product.discount }
                            price= { product.price }
                            />
                        })
                        : null
                    }
                </div>
            </div>
                <div className="resume-count">
                    <div className="cart-container-2">
                        <h3>Resumen de compra</h3>
                        <hr/>
                        <div className="cart-price-products">
                            <h4>Productos (3)</h4>
                            <p>$25000</p>
                        </div>
                        <div className="cart-price-send">
                            <h4>Envío gratis</h4>
                            <p>$0</p>
                        </div>
                        <hr/>        
                        <div className="cart-total-products">
                            <h4>TOTAL:</h4>
                            <p>$25000</p>
                        </div>
                    </div>
                        <button className="btn-continue-cart" onClick={() => handleContinue()} >Continuar</button>
                </div>
        </div>
    </div>
  )
}

export default ShoppingCart

