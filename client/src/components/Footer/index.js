import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import facebook from '../../assets/social-facebook.png';
import instagram from '../../assets/social-instagram.png'

function Footer() {
  return (
        <div className="footer">
          <div className="footer-container">
            <h1>Booma </h1>
            <div>
          <Link to={'/terminos'} className='link-footer' >
            <p>Terminos y condiciones</p>
          </Link>
            </div>
        <div>
              <p>Preguntas frecuentes</p>
            </div>
        <div className='footer-container'>
          <a className='link-footer'
            href="https://www.facebook.com/profile.php?id=100080195515452">
            <p>Facebook</p>
            <img src={facebook} alt=" " width={30} />
          </a>
        </div>
        <div className='footer-container'>
          <a className='link-footer'
            href="http://www.instagram.com/boomaropadeportiva"><p>Instagram</p>
            <img src={instagram} alt=" " width={30} />
          </a>
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