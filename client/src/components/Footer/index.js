import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        <div className="footer">
          <div className="footer-container">
            <h1>Booma </h1>
            <div>
          <Link to={'/terminos'}><p>Terminos y condiciones</p></Link>
            </div>
        <div>
              <p>Preguntas frecuentes</p>
            </div>
            <div>
          <a href="https://www.facebook.com/profile.php?id=100080195515452"><p>Facebook</p></a>
          <a href="http://www.instagram.com"><p>Instagram</p></a>
            </div>
            <div >
              <p>Contacto</p>
              <Link to="/map" className='link-footer'>
              <p>Entregas y Envios</p>
              </Link>
          <p>Reclamos o sugerencias</p>
            </div>
          </div>  
        </div>
        
        )
}

export default Footer