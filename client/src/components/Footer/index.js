import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

function Footer() {
  const {pathname} = window.location;

  return (!pathname.includes("admin")  &&
        <div className="footer">
          <div className="footer-container">
            <h1>Booma </h1>
            <div>
              <p>Trabajá con nosotros</p>
              <p>Terminos y condiciones</p>
              <p>Cómo cuidamos tu privacidad</p>
            </div>
            <div>
              <p>Ayuda</p>
              <p>Defensa del consumidor</p>
              <p>Preguntas frecuentes</p>
            </div>
            <div>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>TikTok</p>
            </div>
            <div >
              <p>Contacto</p>
              <Link to="/map" className='link-footer'>
              <p>Entregas y Envios</p>
              </Link>
              <p>Cambios</p>
            </div>
          </div>  
        </div>
        
        )
}

export default Footer