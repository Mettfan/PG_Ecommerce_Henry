import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';


function NavBar(props) {
  let productos = props.productos

  useEffect(()=>{
    console.log('gettingProducts')
    props.getProducts()
    
  },[])

  //Creamos el estado en donde se guardara la busqueda ingresada por el usuario y el resultado
  let [state, setState] = useState({
    search: '',
    result: []
  })

  //Creamos la función con la que guardaremos lo que escribe el usuario en la barra de busqueda
  function handleOnChange (e) {
    setState({
      ...state, 
      search: e.target.value
    })
  }

  //Creamos la funcion con la cual realizaremos el filtrado de acuerdo a lo que el usuario ingresa
  function handleOnSearch (e){

    
    e.preventDefault()
    console.log(' SEARCHING: ' + state.search )
    let result = productos.filter( producto => {
      return producto.name.includes(state.search)
    }) 
    setState({
      ...state,
      result: result
    }) 
    //El console log esta un render atrás, para ver el resultado en tiempo real se debe usar dentro del componente  
    console.log('RESULT: ')
    console.log(state.result)

  }
  return (
    <>
      
      <div className="header">
        <div className="home-container">
          <Link to="/home">
            <img src={logo} className="logo" alt="a " />
          </Link>

          <div className="sb_nav">
            <form id="Find" className="Find">
              <div className="sb_searchcontainer">
                <input
                  id="form"
                  type="text"
                  placeholder="Busca tu articulo"
                  className="inputSearch"
                  onChange={ (e) => handleOnChange(e)}
                />
                <button id="sb_send" type="submit" className="submitBtn" onClick={ (e) => handleOnSearch(e)}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fsearch-button-png-search-icon-this-icon-is-supposed-to-represent-a-magnifying-glass-it-s-a-large-png-50-px-1600.png&f=1&nofb=1"
                    alt="img not found"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="userbuttons-container">
            <ul className="main-nav">
              <Link to="/login">
                <button className="btnHome">
                  <RiLoginCircleFill />
                </button>
              </Link>

              <Link to="/login">
                <button className="btnHome">
                  <AiFillHeart />
                </button>
              </Link>

              <Link to="/home">
                <button className="btnHome">
                  <BsFillCartFill />
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ( state ) => {
  return {
    productos: state.productReducer.productos
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    getProducts: ( ) => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)