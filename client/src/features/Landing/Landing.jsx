import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { FilterByBrand, getProducts } from '../../redux/actions/productActions';
import fotoLandingPromotions from '../../assets/salesLanding.png'
import './Landing.css'

function Landing() {

  const dispatch = useDispatch();
  const nav = useNavigate();


  const handleRedirectWithFilterNike = () => {
    nav('/home')
    
    setTimeout(() => {
      dispatch(FilterByBrand('Nike'))
    } , 10)
  }
  const handleRedirectWithFilterAdidas = () => {
    nav('/home')
    
    setTimeout(() => {
      dispatch(FilterByBrand('Adidas'))
    } , 10)
  }
  const handleRedirectWithFilterJordan = () => {
    nav('/home')
    
    setTimeout(() => {
      dispatch(FilterByBrand('Jordan'))
    } , 10)
  }
  const handleRedirectWithFilterPuma = () => {
    nav('/home')
    
    setTimeout(() => {
      dispatch(FilterByBrand('Puma'))
    } , 10)
  }
  const handleRedirectWithFilterReebok = () => {
    nav('/home')
    
    setTimeout(() => {
      dispatch(FilterByBrand('Reebok'))
    } , 10)
  }
  const handleRedirectWithFilterFila = () => {
    nav('/home')
    
    setTimeout(() => {
      dispatch(FilterByBrand('Fila'))
    } , 10)
  }


  
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



  

  return (
    <>

    <div className="envioGratisDiv">
      <Link className="envioGratisImg" to="/home">
        <img className="envioGratisImg" src="https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw538b66bc/02mar/headerexpressycuotas.gif?sw=1440&sfrm=gif" alt="" />
      </Link>
    </div>

     

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

              <div className="internal" >
              <img src="https://essential.vteximg.com.br/arquivos/ids/302830/mark_marca-nike.png?v=637099652700230000" alt="" value="Nike"  onClick={(event) => handleRedirectWithFilterNike(event)}/>
              </div>

              <div className="internal" >
              <img src="https://essential.vteximg.com.br/arquivos/ids/156496/mark_marca%20(14).png?v=636598400494800000" alt="" value="Adidas"  onClick={(event) => handleRedirectWithFilterAdidas(event)}/>
              </div>
              
              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/155420/mark_marca%20(5).png?v=636523099290500000" alt=""  value="Jordan" onClick={(event) => handleRedirectWithFilterJordan(event)}/>
              </div>

              <div className="internal">
                  <img src="https://essential.vteximg.com.br/arquivos/ids/216518/marca_fila.png?v=636840438295830000" alt="" value="Fila" onClick={(event) => handleRedirectWithFilterFila(event)} />
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/155417/mark_marca%20(2).png?v=636523099260430000" alt=""  value="Puma" onClick={(event) => handleRedirectWithFilterPuma(event)}/>
              </div>

              <div className="internal">
              <img src="https://essential.vteximg.com.br/arquivos/ids/312139/reebok.png?v=637674117928170000" alt=""  value="Reebok" onClick={(event) => handleRedirectWithFilterReebok(event)}/>
              </div>


            </div>
        </div>
        <button id="rigbtn" type="button"> ▶ </button>


      </div>
          </div>
      
      
      
   





        <Link to="/promotions">
        <img
          className="fotosofertas"
          src={fotoLandingPromotions}
          alt="boquita"
        />
        </Link>

      

      <div className="home-newsletter">
          <div className="home-newsletter-container">
          <h2 className="home-newsletter-title">¡SUSCRIBITE Y OBTENÉ $600 PARA TU PRIMERA COMPRA!</h2>
          <p className="home-newsletter-p">Además recibí novedades y promociones exclusivas en tu mail.</p>
          <input className="home-newsletter-input" type="text" placeholder="Ingresá tu mail" />
          <button className="home-newsletter-button">Suscribirme</button>
        </div>
      </div>



    </>
  );
}

export default Landing