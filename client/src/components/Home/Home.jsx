import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './Home.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import Catalog from '../Product/Catalog/Catalog'
// import SearchDialog from '../NavBar/SearchDialog/SearchDialog';
import { useAuth0 } from '@auth0/auth0-react'
import {MdOutlineArrowDropUp, MdOutlineArrowDropDown} from 'react-icons/md'
import { FilterByCategory, filterByGenre } from '../../redux/actions/productActions';


function Home(props) {
  let status = useSelector( state => state.userReducer.status)
  const { isAuthenticated } = useAuth0()


  const dispatch = useDispatch();
  
  function handleGenre(event) {
      dispatch(filterByGenre(event.target.value))
  }

  function handleCategory(event) {
      dispatch(FilterByCategory(event.target.value))
  }


  let nav = useNavigate()

  let [state, setState] = useState({
    productsRendered: 8,
  })
  
  var productos = props.productos
  function loadMoreProducts() {
    if(state.productsRendered!==productos.length){
      console.log(state.productsRendered)
      setState({
        productsRendered: state.productsRendered + 4 
      })

    }
  }
  
  useEffect (()=>{
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          loadMoreProducts()
      }
  };
  }, [state.productsRendered])
  
  function goTop(){

    document.documentElement.scrollTop = 0
    console.log('GO TOP')
  }



  useEffect (()=>{
    const bloque    = document.querySelectorAll('.bloqueacordeon')
    const h2        = document.querySelectorAll('.h2acordeon')
        
    
    // Cuando CLICK en h2,
        // QUITAR la clase activo de TODOS los bloque
        // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2
    
    // Recorrer TODOS los h2
    h2.forEach( ( cadaH2 , i )=>{
        // Asignando un CLICK a cada h2
        h2[i].addEventListener('click', ()=>{
    
            // Recorrer TODOS los bloque
            bloque.forEach( ( cadaBloque , i )=>{
                // Quitamos la clase activo de TODOS los bloques
                bloque[i].classList.remove('activo')
            })
            // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
            // (Línea número 12)
            bloque[i].classList.add('activo')
    
        })
    })

  })

  return (
    <>
      {console.log(productos)}
      {/* <NavBar/> */}
      {/* <SearchDialog content = {productos}></SearchDialog> */}

      <div className="home-filtersandcard">
        <div className="home-filter">

        <div className="acordeon">
      <div className="bloqueacordeon">
        <h2 className="h2acordeon">Genero</h2>
        <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenre(event)}  >Todos</button>
        <button className="contenido botongenero" value={'Niño'} onClick={(event) => handleGenre(event)} >Niño</button>
        <button className="contenido botongenero" value={'Dama'} onClick={(event) => handleGenre(event)} >Dama</button>
        <button className="contenido botongenero" value={'Caballero'} onClick={(event) => handleGenre(event)}  >Caballero</button>
      </div>
      <div className="bloqueacordeon">
        <h2 className="h2acordeon">Categorías</h2>
        <button className="contenido botongenero" value={'todos'} onClick={(event) => handleCategory(event)}  >Todos</button>
        <button className="contenido botongenero" value={'Remera'} onClick={(event) => handleCategory(event)} >Remeras</button>
        <button className="contenido botongenero" value={'Pantalon'} onClick={(event) => handleCategory(event)} >Pantalones</button>
        <button className="contenido botongenero" value={'Zapatilla'} onClick={(event) => handleCategory(event)}  >Zapatillas</button>
      </div>

    </div>


        </div>

        <div className="home-cards">
          <Catalog
            productos={productos.slice(0, state.productsRendered)}
          ></Catalog>
        </div>
      </div>

      <button className="scroll-top-button" onClick={() => goTop()}>
        {" "}
        <img
          className="go-top-arrow"
          src="https://cdn2.iconfinder.com/data/icons/arrows-part-3-3/32/arrow-top-1-512.png"
          alt="GO TOP"
        ></img>{" "}
      </button>
      {isAuthenticated && (
        <button
          className="admin-create-button"
          onClick={() => nav("../admin/products")}
        >
          {" "}
          <b>ADMIN WATCH </b>{" "}
        </button>
      )}
    </>
  );

}

const mapStateToProps = ( state ) => {
  return{
    productos: state.productReducer.productos
  }
}


export default connect(mapStateToProps)(Home)