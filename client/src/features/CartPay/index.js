import './index.css';
import React, { useState } from "react";
import ReactDOM from "react-dom"
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const handleSelect = (e) => {
  e.preventDefault();
  console.log('e.target.value', e.target.value)
}



const CartPay = () => { 
  let [state, setState] = useState({
    price: 350
  })
  let nav = useNavigate()
  function  cancel(e){
    e.preventDefault()
    console.log('cancel')
    nav('/user/products')
  }
  let cookie = new Cookies()
  return (
    <div>
        <div className="form-pay-container">
          <div className="pay-container">

            <div className="title-pay">
                <p>
                  Pagá con tu Visa Electron
                </p>
            </div>
            <div className="total-pay">
              <h3>TOTAL</h3>
              <h2>{(Number(cookie.get('total')) )?.toFixed(2)}</h2>
            </div>
              <div className="pay">
                <p>Seleccione las cuotas</p>
                <select className="select-cart" onClick={(e) => handleSelect(e)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                </select>
              </div>  
              <div className="form-submit-pay">
                <form onSubmit={ (e ) => cancel(e) }> 

              <button className='cancelButton' type='submit' ><b>Cancelar</b></button> 
                
              
                </form>
              {/* En el siguiente form se mandan los parámetros al back de manera rápida */}
              {/* Value es pasado como string :( */}
              <form action='http://localhost:3001/productos/checkout' method='POST'>
                  <input type='hidden' name='productList' value={JSON.stringify(cookie.get('shopping')?.msg)}></input>
                  <input type='hidden' name='userEmail' value={cookie.get('user').email}></input>
                  <input type='hidden' name='total' value={100} ></input>
                  <button className='mpButton' type='submit' ><b>Pagar</b><img className='mpImage' src='https://www.lentesplus.com/media/wysiwyg/landings/metodos-de-pago/ico_mercadoPago.png' alt= ''></img> </button>

              </form>
              {/* {JSON.stringify(cookie.get('shopping').msg)} */}
            </div>
              
          </div>
              
        </div>
                <div>

             

                </div>
    </div>
  )
}

export { CartPay }