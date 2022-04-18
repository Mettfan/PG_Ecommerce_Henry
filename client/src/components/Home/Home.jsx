import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './Home.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import Catalog from '../Product/Catalog/Catalog'
// import SearchDialog from '../NavBar/SearchDialog/SearchDialog';
import { useAuth0 } from '@auth0/auth0-react'
import {MdOutlineArrowDropUp, MdOutlineArrowDropDown} from 'react-icons/md'

import { FilterByCategory, filterByGenre, filterByGenreChildren, filterByGenreMen, filterByGenreWomen } from '../../redux/actions/productActions';


import Cookies from 'universal-cookie';



function Home(props) {
  let status = useSelector( state => state.userReducer.status)
  const { isAuthenticated } = useAuth0()
  let cookie = new Cookies()

  const dispatch = useDispatch();
  
  function handleGenreMen(event) {
      dispatch(filterByGenreMen(event.target.value))
  }
  function handleGenreWomen(event) {
      dispatch(filterByGenreWomen(event.target.value))
  }
  function handleGenreChildren(event) {
      dispatch(filterByGenreChildren(event.target.value))
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
    if (state.productsRendered !== productos.length) {
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

  }



  useEffect (()=>{
    const bloque    = document.querySelectorAll('.bloqueacordeon')
    const h2        = document.querySelectorAll('.h2acordeon')
        
    

    
    // Recorrer TODOS los h2
    h2.forEach( ( cadaH2 , i )=>{
        // Asignando un CLICK a cada h2
        h2[i].addEventListener('click', ()=>{
    

            // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
           
            bloque[i].classList.toggle('activo')
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
              <h2 className="h2acordeon">Hombre</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreMen(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Sudaderas'} onClick={(event) => handleGenreMen(event)} >Remeras</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreMen(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreMen(event)}  >Zapatillas</button>
            </div>
            



            <div className="bloqueacordeon">
              <h2 className="h2acordeon">Mujer</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreWomen(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Sudaderas'} onClick={(event) => handleGenreWomen(event)} >Remeras</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreWomen(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreWomen(event)}  >Zapatillas </button>
            </div>




            <div className="bloqueacordeon">
              <h2 className="h2acordeon">Niño</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreChildren(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Sudaderas'} onClick={(event) => handleGenreChildren(event)} >Remeras</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreChildren(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreChildren(event)}  >Zapatillas</button>
            </div>



            <div className="bloqueacordeon">
              <h2 className="h2acordeon">Categorías</h2>
              <button className="contenido botongenero" value={'todos'} onClick={(event) => handleCategory(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Sudaderas'} onClick={(event) => handleCategory(event)} >Remeras</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleCategory(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleCategory(event)}  >Zapatillas</button>
            </div>

            <div className="bloqueacordeon">
              <h2 className="h2acordeon">Precios</h2>
              <button className="contenido botongenero" value={'All'}  >0 - 5.000</button>
              <button className="contenido botongenero" value={'Niño'} >5.000 - 10.0000</button>
              <button className="contenido botongenero" value={'Dama'} >10.000 - 15.000</button>
              <button className="contenido botongenero" value={'Caballero'}  >15.000 ▶ </button>
            </div>

          </div>
        </div>
       {/* {JSON.stringify(cookie.get('user'))} */}
        <div className="home-cards">
          <Catalog
            productos={productos.slice(0, state.productsRendered)}
          ></Catalog>
        </div>
      </div>
      <div className="scroll-top-button-bottom">
      <button className="scroll-top-button" onClick={() => goTop()}>
        {" "}
        <img
          className="go-top-arrow"
          src="https://cdn2.iconfinder.com/data/icons/arrows-part-3-3/32/arrow-top-1-512.png"
          alt="GO TOP"
        ></img>{" "}
      </button>
      </div>
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