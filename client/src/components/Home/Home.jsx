import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Home.css'

function Home() {
  return (
    <>
      
      <NavBar/>


      <div className="category-container">
        <ul className="category-ul">
          <li className="category-item">Categoría</li>
          <li className="category-item">Mujer</li>
          <li className="category-item">Hombre</li>
        </ul>
      </div>

      <div className="home-main">
        <img
          className="home-mainBanner"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwe786c867/28mar/full4boca.jpg?sw=1440&sfrm=jpg"
          alt="boquita"
        />
      </div>

      <div className="home-ofertas">
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwd16dc829/13dic/deal1ojotas.png"
          alt="boquita"
        />
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw8c42a0bf/13dic/deal2botines.png"
          alt="boquita"
        />
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw3257527e/13dic/deal3mochilas.png"
          alt="boquita"
        />
        <img
          className="home-ofertaitems"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw4345030f/07feb/deal4remeras.png"
          alt="boquita"
        />
      </div>





      <div className="home-ofertas">
        <img
          className="fotosofertas"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwde63764d/28mar/triplo1adidasbocariver.png"
          alt="boquita"
        />
        <img
          className="fotosofertas"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw2eeffcaa/28mar/triplo2sale.png"
          alt="boquita"
        />
        <img
          className="fotosofertas"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw09fb095c/28mar/triplo3reebokwhs.jpg"
          alt="boquita"
        />
      </div>

      <div className="home-newsletter">
          <div className="home-newsletter-container">
          <h2 className="home-newsletter-title">¡SUSCRIBITE Y OBTENÉ $600 PARA TU PRIMERA COMPRA!</h2>
          <p className="home-newsletter-p">Además recibí novedades y promociones exclusivas en tu mail.</p>
          <input className="home-newsletter-input" type="text" placeholder="Ingresá tu mail" />
          <button className="home-newsletter-button">Suscribirme</button>
        </div>
      </div>



      <div className="home-bannersecundario">
        <img
            className="home-secBanner"
            src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw41fee1b0/28mar/doble1uaprojectrock.jpg"
            alt="boquita"
            />
      <img
          className="home-secBanner"
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw5937c74d/14mar/doble1topperbenito.png"
          alt="boquita"
          />
    </div>
    </>
  
  );

}



export default Home