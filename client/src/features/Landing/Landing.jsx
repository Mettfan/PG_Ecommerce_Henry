import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { FilterByBrand, getProducts } from '../../redux/actions/productActions';
import './Landing.css'

function Landing() {

  const dispatch = useDispatch();
  const nav = useNavigate();


  const handleRedirectWithFilterNike = () => {
    nav('/home')
      dispatch(getProducts())
    
    setTimeout(() => {
      dispatch(FilterByBrand('Nike'))
    } , 10)
  }
  const handleRedirectWithFilterAdidas = () => {
    nav('/home')
      dispatch(getProducts())
    
    setTimeout(() => {
      dispatch(FilterByBrand('Adidas'))
    } , 10)
  }
  const handleRedirectWithFilterJordan = () => {
    nav('/home')
      dispatch(getProducts())
    
    setTimeout(() => {
      dispatch(FilterByBrand('Jordan'))
    } , 10)
  }
  const handleRedirectWithFilterPuma = () => {
    nav('/home')
      dispatch(getProducts())
    
    setTimeout(() => {
      dispatch(FilterByBrand('Puma'))
    } , 10)
  }
  const handleRedirectWithFilterReebok = () => {
    nav('/home')
      dispatch(getProducts())
    
    setTimeout(() => {
      dispatch(FilterByBrand('Reebok'))
    } , 10)
  }
  const handleRedirectWithFilterFila = () => {
    nav('/home')
      dispatch(getProducts())
    
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

      <div class="carrousel">
          <Link to="/home" style={{ textDecoration: 'none' }}>
        <div class="grande">
          <img src="https://essential.vteximg.com.br/arquivos/ids/538061/1600x576airmaxmonth.png?v=637838308044130000" alt="Imagen 2" class="img" />

          <img src="https://essential.vteximg.com.br/arquivos/ids/540528/2717294_Grid1600x576pxsupersatt.jpg?v=637842452793630000" alt="Imagen 1" class="img" />

          <img src="https://essential.vteximg.com.br/arquivos/ids/535841/BannerDesktop_RENNONG.jpg?v=637834624494370000" alt="Imagen 3" class="img" />
        </div>
          </Link>

        <ul class="puntos">
          <li class="punto activo"></li>
          <li class="punto"></li>
          <li class="punto"></li>
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