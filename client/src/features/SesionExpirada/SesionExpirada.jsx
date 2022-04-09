import React from 'react'
import { Link } from 'react-router-dom'
import './SesionExpirada.css'

function SesionExpirada() {
  return (
    <div className="finsesiondiv-padre">
        <div className="finsesiondiv-container">
            <h2 className="finsesion-h2">Tu sesión se cerró, pero podés retomar tu compra </h2> 
            <p className="finsesion-p">Estuviste mucho tiempo fuera de esta pantalla y, por seguridad, cerramos tu sesión. No te preocupes, podés terminar tu compra.</p>
                <Link to="/home">
            <button className="finsesion-boton">Retomar mi compra</button>
                </Link>
        </div>
    </div>
  )
}

export default SesionExpirada