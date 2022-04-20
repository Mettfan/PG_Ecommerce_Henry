import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import axios from 'axios';

function Landing() {
  const [input, setInput] = useState("")
  
  useEffect(() => {

    const grande    = document.querySelector('.grande')
    const punto     = document.querySelectorAll('.punto')
    
    // Cuando CLICK en punto
        // Saber la posición de ese punto
        // Aplicar un transform translateX al grande
        // QUITAR la clase activo de TODOS puntos
        // AÑADIR la clase activo al punto que hemos hecho CLICK
    
    // Recorrer TODOS los punto
    punto.forEach( ( cadaPunto , i )=> {
        // Asignamos un CLICK a cadaPunto
        punto[i].addEventListener('click',()=>{
    
            // Guardar la posición de ese PUNTO
            let posicion  = i
            // Calculando el espacio que debe DESPLAZARSE el GRANDE
            let operacion = posicion * -33.33
    
            // MOVEMOS el grand
            grande.style.transform = `translateX(${ operacion }%)`
    
            // Recorremos TODOS los punto
            punto.forEach( ( cadaPunto , i )=>{
                // Quitamos la clase ACTIVO a TODOS los punto
                punto[i].classList.remove('activo')
            })
            // Añadir la clase activo en el punto que hemos hecho CLICK
            punto[i].classList.add('activo')
    
        })
    })
  }, [])


  useEffect(() => {
    const rightBtn = document.querySelector('#rigbtn');
    const leftBtn = document.querySelector('#leftbtn');
    
    rightBtn.addEventListener("click", function(event) {
      const conent = document.querySelector('#encontraContainer');
      conent.scrollLeft += 300;
      event.preventDefault();
    });
    
    leftBtn.addEventListener("click", function(event) {
      const conent = document.querySelector('#encontraContainer');
      conent.scrollLeft -= 300;
      event.preventDefault();
    });
  }, [])
  
  // const addProductFavorite = ( {email} ) => async dispatch  => {
  //     await axios.post('http://localhost:3001/usuario/newsletter', {
  //         email
  //     }).then( response => {
  //       console.log('response.data action fav', response.data)
  //         dispatch({
  //             type: ADD_PRODUCT_FAVORITE,
  //             payload: response.data
  //         })
  //     },
  //     (error) => {
  //         dispatch({
  //             type: ERROR,
  //             payload: error.error
  //         })
  //     })
  // }
  const validate = () => {
        const error = {};
    if(!input){
      error.input = "Ingrese su email"
    }else if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)){
      error.input = "Ingrese un mail válido"
    }
  }

  const handleOnChangeSusbribe = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  }
  const handleSusbribe = (e) => {
    e.preventDefault();



      axios.post('http://localhost:3001/usuario/newsletter', {
          // email
           "email": input
      }).then( response => {
        console.log('response.data newsletter fav', response.data)
          // dispatch({
          //     type: ADD_PRODUCT_FAVORITE,
          //     payload: response.data
          // })
      },
      (error) => {
        console.log('error', error)
          // dispatch({
          //     type: ERROR,
          //     payload: error.error
          // })
      })
      setInput("")
  }
  

  return (
    <>

      <div className="carrousel">
          <Link to="/home" style={{ textDecoration: 'none' }}>
          <div className="grande">
            <img src="https://essential.vteximg.com.br/arquivos/ids/538061/1600x576airmaxmonth.png?v=637838308044130000" alt="Imagen 2" className="img" />

            <img src="https://essential.vteximg.com.br/arquivos/ids/540528/2717294_Grid1600x576pxsupersatt.jpg?v=637842452793630000" alt="Imagen 1" className="img" />

            <img src="https://essential.vteximg.com.br/arquivos/ids/535841/BannerDesktop_RENNONG.jpg?v=637834624494370000" alt="Imagen 3" className="img" />
        </div>
          </Link>

        <ul className="puntos">
          <li className="punto activo"></li>
          <li className="punto"></li>
          <li className="punto"></li>
        </ul>
      </div>


    
    <div className="marcasdivpadre">

      <div className="marcascontainter">
        <h1>Encontrá las mejores marcas</h1>
        <button id="leftbtn" type="button"> ◀ </button>

        <div className="encontraMarcas">
            <div id="encontraContainer" className="encontraContainer">

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/302830/mark_marca-nike.png?v=637099652700230000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/156496/mark_marca%20(14).png?v=636598400494800000" alt="" />
              </div>
              
              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/155420/mark_marca%20(5).png?v=636523099290500000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/216518/marca_fila.png?v=636840438295830000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/155417/mark_marca%20(2).png?v=636523099260430000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/312139/reebok.png?v=637674117928170000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/211032/marca_underarmour.png?v=636797093526070000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/312144/compra-x-marca-shoter.png?v=637140952829330000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/155421/mark_marca%20(6).png?v=636523099300130000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/155419/mark_marca%20(4).png?v=636523099280200000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/156569/mark_marca%20(22).png?v=636602539151830000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/312141/compra-x-marca-goorin.png?v=637140948915730000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/312142/compra-x-marca-new-era.png?v=637140949760970000" alt="" />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/312143/compra-x-marca-jansport.png?v=637140950252600000" alt="" />
              </div>


            </div>
        </div>
        <button id="rigbtn" type="button"> ▶ </button>


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
          src="https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw2eeffcaa/28mar/triplo2sale.png"
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

      <div className="home-newsletter">
          <div className="home-newsletter-container">
          <h2 className="home-newsletter-title">¡SUSCRIBITE! RECIBÍ NOVEDADES Y PROMOCIONES EXCLUSIVAS EN TU MAIL!</h2>
          {/* <p className="home-newsletter-p">Además recibí novedades y promociones exclusivas en tu mail.</p> */}
          <input className="home-newsletter-input" type="text" placeholder="Ingresá tu mail" value={input} onChange={(e)=>handleOnChangeSusbribe(e)} />
          <button className="home-newsletter-button" onClick={(e) => handleSusbribe(e)} >Suscribirme</button>
        </div>
      </div>
    </>
  );
}

export default Landing