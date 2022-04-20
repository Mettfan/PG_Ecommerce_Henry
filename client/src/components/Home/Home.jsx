import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
//import NavBar from '../NavBar/NavBar';
import './Home.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import Catalog from '../Product/Catalog/Catalog'
// import SearchDialog from '../NavBar/SearchDialog/SearchDialog';
import { useAuth0 } from '@auth0/auth0-react'
//import {MdOutlineArrowDropUp, MdOutlineArrowDropDown} from 'react-icons/md'

import { cleanProduct, FilterByBrand, FilterByCategory, filterByGenreMen, filterByGenreNiña, filterByGenreNiño, filterByGenreUnisex, filterByGenreWomen, FilterByPrice, getProducts } from '../../redux/actions/productActions';


import Cookies from 'universal-cookie';





function Home(props) {




  let status = useSelector( state => state.userReducer.status)
  const { isAuthenticated } = useAuth0()
  let cookie = new Cookies()

  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(cleanProduct())
    }, [dispatch])



    

  function handleGenreMen(event) {
      dispatch(filterByGenreMen(event.target.value))
  }
  function handleGenreWomen(event) {
      dispatch(filterByGenreWomen(event.target.value))
  }
  //function handleGenreUnisex(event) {
  //    dispatch(filterByGenreUnisex(event.target.value))
  //}
  function handleGenreNiño(event) {
      dispatch(filterByGenreNiño(event.target.value))
  }
  function handleGenreNiña(event) {
      dispatch(filterByGenreNiña(event.target.value))
  }
  function handlePriceFilter(event) {
      dispatch(FilterByPrice(event.target.value))
  }
  function handleBrandFilter(event) {
      dispatch(FilterByBrand(event.target.value))
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


  const [show, setShow] = useState(false);
  const [showWo, setShowWo] = useState(false);
 // const [showUni, setShowUni] = useState(false);
  const [showNiño, setShowNiño] = useState(false);
  const [showNiña, setShowNiña] = useState(false);
  const [showCats, setShowCats] = useState(false);
  const [showMarcas, setShowMarcas] = useState(false);
  const [showPri, setShowPri] = useState(false);

  return (
    <>
      {/* {console.log(productos)} */}
      {/* <NavBar/> */}
      {/* <SearchDialog content = {productos}></SearchDialog> */}
      <div className="home-filtersandcard">
        <div className="home-filter">
          <div className="acordeon">
            <div className={show ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShow(!show)}>
              <h2 className="h2acordeon">Hombre</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreMen(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Camperas'} onClick={(event) => handleGenreMen(event)} >Camperas</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreMen(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreMen(event)}  >Zapatillas</button>
              <button className="contenido botongenero" value={'Mochilas'} onClick={(event) => handleGenreMen(event)}  >Mochilas</button>
              <button className="contenido botongenero" value={'Gorras'} onClick={(event) => handleGenreMen(event)}  >Gorras</button>
              <button className="contenido botongenero" value={'Bolsos'} onClick={(event) => handleGenreMen(event)}  >Bolsos</button>
              <button className="contenido botongenero" value={'Buzos'} onClick={(event) => handleGenreMen(event)}  >Buzos</button>
              <button className="contenido botongenero" value={'Calzas'} onClick={(event) => handleGenreMen(event)}  >Calzas</button>
              <button className="contenido botongenero" value={'Remeras'} onClick={(event) => handleGenreMen(event)}  >Remeras</button>
              <button className="contenido botongenero" value={'Botines'} onClick={(event) => handleGenreMen(event)}  >Botines</button>
            </div>
            



            <div className={showWo ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShowWo(!showWo)}>
              <h2 className="h2acordeon">Mujer</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreWomen(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Camperas'} onClick={(event) => handleGenreWomen(event)} >Camperas</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreWomen(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreWomen(event)}  >Zapatillas </button>
              <button className="contenido botongenero" value={'Mochilas'} onClick={(event) => handleGenreWomen(event)}  >Mochilas </button>
              <button className="contenido botongenero" value={'Gorras'} onClick={(event) => handleGenreWomen(event)}  >Gorras </button>
              <button className="contenido botongenero" value={'Bolsos'} onClick={(event) => handleGenreWomen(event)}  >Bolsos </button>
              <button className="contenido botongenero" value={'Buzos'} onClick={(event) => handleGenreWomen(event)}  >Buzos </button>
              <button className="contenido botongenero" value={'Calzas'} onClick={(event) => handleGenreWomen(event)}  >Calzas </button>
              <button className="contenido botongenero" value={'Remeras'} onClick={(event) => handleGenreWomen(event)}  >Remeras </button>
              <button className="contenido botongenero" value={'Botines'} onClick={(event) => handleGenreWomen(event)}  >Botines </button>
            </div>





            <div className={showNiño ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShowNiño(!showNiño)}>
              <h2 className="h2acordeon">Niño</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreNiño(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Camperas'} onClick={(event) => handleGenreNiño(event)} >Camperas</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreNiño(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreNiño(event)}  >Zapatillas</button>
              <button className="contenido botongenero" value={'Mochilas'} onClick={(event) => handleGenreNiño(event)}  >Mochilas</button>
              <button className="contenido botongenero" value={'Gorras'} onClick={(event) => handleGenreNiño(event)}  >Gorras</button>
              <button className="contenido botongenero" value={'Bolsos'} onClick={(event) => handleGenreNiño(event)}  >Bolsos</button>
              <button className="contenido botongenero" value={'Buzos'} onClick={(event) => handleGenreNiño(event)}  >Buzos</button>
              <button className="contenido botongenero" value={'Calzas'} onClick={(event) => handleGenreNiño(event)}  >Calzas</button>
              <button className="contenido botongenero" value={'Remeras'} onClick={(event) => handleGenreNiño(event)}  >Remeras</button>
              <button className="contenido botongenero" value={'Botines'} onClick={(event) => handleGenreNiño(event)}  >Botines</button>
            </div>


            <div className={showNiña ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShowNiña(!showNiña)}>
              <h2 className="h2acordeon">Niña</h2>
              <button className="contenido botongenero" value={'All'} onClick={(event) => handleGenreNiña(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Camperas'} onClick={(event) => handleGenreNiña(event)} >Camperas</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleGenreNiña(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleGenreNiña(event)}  >Zapatillas</button>
              <button className="contenido botongenero" value={'Mochilas'} onClick={(event) => handleGenreNiña(event)}  >Mochilas</button>
              <button className="contenido botongenero" value={'Gorras'} onClick={(event) => handleGenreNiña(event)}  >Gorras</button>
              <button className="contenido botongenero" value={'Bolsos'} onClick={(event) => handleGenreNiña(event)}  >Bolsos</button>
              <button className="contenido botongenero" value={'Buzos'} onClick={(event) => handleGenreNiña(event)}  >Buzos</button>
              <button className="contenido botongenero" value={'Calzas'} onClick={(event) => handleGenreNiña(event)}  >Calzas</button>
              <button className="contenido botongenero" value={'Remeras'} onClick={(event) => handleGenreNiña(event)}  >Remeras</button>
              <button className="contenido botongenero" value={'Botines'} onClick={(event) => handleGenreNiña(event)}  >Botines</button>
            </div>

            <div className={showMarcas ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShowMarcas(!showMarcas)}>
              <h2 className="h2acordeon">Marcas</h2>
              <button className="contenido botongenero" value={'todos'} onClick={(event) => handleBrandFilter(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Nike'} onClick={(event) => handleBrandFilter(event)} >Nike</button>
              <button className="contenido botongenero" value={'Adidas'} onClick={(event) => handleBrandFilter(event)} >Adidas</button>
              <button className="contenido botongenero" value={'Jordan'} onClick={(event) => handleBrandFilter(event)}  >Jordan</button>
              <button className="contenido botongenero" value={'Fila'} onClick={(event) => handleBrandFilter(event)}  >Fila</button>
              <button className="contenido botongenero" value={'Puma'} onClick={(event) => handleBrandFilter(event)}  >Puma</button>
              <button className="contenido botongenero" value={'Reebok'} onClick={(event) => handleBrandFilter(event)}  >Reebok</button>
            </div>



            <div className={showCats ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShowCats(!showCats)}>
              <h2 className="h2acordeon">Categorías</h2>
              <button className="contenido botongenero" value={'todos'} onClick={(event) => handleCategory(event)}  >Todos</button>
              <button className="contenido botongenero" value={'Camperas'} onClick={(event) => handleCategory(event)} >Camperas</button>
              <button className="contenido botongenero" value={'Pantalones'} onClick={(event) => handleCategory(event)} >Pantalones</button>
              <button className="contenido botongenero" value={'Zapatillas'} onClick={(event) => handleCategory(event)}  >Zapatillas</button>
              <button className="contenido botongenero" value={'Mochilas'} onClick={(event) => handleCategory(event)}  >Mochilas</button>
              <button className="contenido botongenero" value={'Gorras'} onClick={(event) => handleCategory(event)}  >Gorras</button>
              <button className="contenido botongenero" value={'Bolsos'} onClick={(event) => handleCategory(event)}  >Bolsos</button>
              <button className="contenido botongenero" value={'Buzos'} onClick={(event) => handleCategory(event)}  >Buzos</button>
              <button className="contenido botongenero" value={'Calzas'} onClick={(event) => handleCategory(event)}  >Calzas</button>
              <button className="contenido botongenero" value={'Remeras'} onClick={(event) => handleCategory(event)}  >Remeras</button>
              <button className="contenido botongenero" value={'Botines'} onClick={(event) => handleCategory(event)}  >Botines</button>
            </div>

            <div className={showPri ? 'bloqueacordeon activo' : 'bloqueacordeon'} onClick={() => setShowPri(!showPri)}>
              <h2 className="h2acordeon">Precios</h2>
              <button className="contenido botongenero" value={'todos'} onClick={(event) => handlePriceFilter(event)} >Todos</button>
              <button className="contenido botongenero" value={'0-5'} onClick={(event) => handlePriceFilter(event)} >0 - 5.000</button>
              <button className="contenido botongenero" value={'5-10'} onClick={(event) => handlePriceFilter(event)}>5.000 - 10.0000</button>
              <button className="contenido botongenero" value={'10-15'} onClick={(event) => handlePriceFilter(event)}>10.000 - 15.000</button>
              <button className="contenido botongenero" value={'15000'} onClick={(event) => handlePriceFilter(event)} >15.000 ▶ </button>
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