import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (

    <>

<div>
    <div className="landingCar">
    <Link to="/promotions">
        <img
          className="contentStyle"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwe786c867/28mar/full4boca.jpg?sw=1440&sfrm=jpg"
          alt="boquita"
          width= "100%"
        />
        </Link>
      </div>

    </div>


 




  <div className="home-ofertas">
        <Link to="/promotions">
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwd16dc829/13dic/deal1ojotas.png"
          alt="boquita"
        />
        </Link>

        <Link to="/promotions">
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw8c42a0bf/13dic/deal2botines.png"
          alt="boquita"
          />
          </Link>

          <Link to="/promotions">
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw3257527e/13dic/deal3mochilas.png"
          alt="boquita"
        />
        </Link>

        <Link to="/promotions">
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw4345030f/07feb/deal4remeras.png"
          alt="boquita"
        />
        </Link>
      </div>





      <div className="home-ofertas">
        <Link to="/promotions">
        <img
          className="fotosofertas"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwde63764d/28mar/triplo1adidasbocariver.png"
          alt="boquita"
        />
        </Link>

        <Link to="/promotions">
        <img
          className="fotosofertas"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw955779b5/01abr/triplo2adidas4dfwdm.jpg"
          alt="boquita"
        />
        </Link>

        <Link to="/promotions">
        <img
          className="fotosofertas"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw09fb095c/28mar/triplo3reebokwhs.jpg"
          alt="boquita"
        />
        </Link>
      </div>







    <div className="newsletter-container">
      <div className="home-newsletter">
          <div className="home-newsletter-container">
          <h2 className="home-newsletter-title">¡SUSCRIBITE Y OBTENÉ $600 PARA TU PRIMERA COMPRA!</h2>
          <p className="home-newsletter-p">Además recibí novedades y promociones exclusivas en tu mail.</p>
          <input className="home-newsletter-input" type="text" placeholder="Ingresá tu mail" />
          <button className="home-newsletter-button">Suscribirme</button>
        </div>
      </div>





    </div>

    </>
  )
}

export default Landing