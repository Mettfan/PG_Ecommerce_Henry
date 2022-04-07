import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'
import { connect, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import SearchDialog from './SearchDialog/SearchDialog';
import Catalog from '../Product/Catalog/Catalog';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar(props) {
  let productos = props.productos
  const { loginWithRedirect, user, isAuthenticated } = useAuth0()
  let status = useSelector( state => state.userReducer.status )
  let isUserAuthenticated = isAuthenticated || status
  
  let nav = useNavigate()
  useEffect(()=>{
    console.log('gettingProducts')
    props.getProducts()
    
  },[])

  //Creamos el estado en donde se guardara la busqueda ingresada por el usuario y el resultado
  let [state, setState] = useState({
    search: '',
    result: [],
    searchIsVisible: false,
    genderFilter: 'All',
    categoryFilter: 'All',
    myButtonLoginIsDisplayed: false
  })

  //Creamos la función con la que guardaremos lo que escribe el usuario en la barra de busqueda
  function handleOnChange (e) {
    setState({
      ...state, 
      search: e.target.value,
      
    })
  }

  //Creamos la funcion con la cual realizaremos el filtrado de acuerdo a lo que el usuario ingresa
  function handleOnSearch (e){

    
    e?.preventDefault()
    console.log(' SEARCHING: ' + state.search )

    //Filtramos por nombre
    let result = productos.filter( producto => {
      return producto.name.includes(state.search)
    }) 

    //Luego fitlramos por Género
    result = result.filter( producto => {
      switch (state.genderFilter){
        case 'All':
          return true
        case 'Dama':
          return producto.gender === 'Dama'
        case 'Caballero':
          return producto.gender === 'Caballero'
        case 'Niño':
          return producto.gender === 'Niño'
      }
    })

    //Por último filtramos por Categoría
    result = result.filter( producto => {
      switch (state.categoryFilter){
        case 'All':
          return true
        case 'Zapatillas':
          return producto.category === 'Zapatillas'
        case 'Pantalones':
          return producto.category === 'Pantalones'
        case 'Sudaderas':
          return producto.category === 'Sudaderas'
      }
    })
    
    setState({
      ...state,
      result: result,
      searchIsVisible: state.search!==''?true:false
    }) 
    //El console log esta un render atrás, para ver el resultado en tiempo real se debe usar dentro del componente  
    console.log('RESULT: ')
    console.log(state.result)
    console.log(state.searchIsVisible) 
    console.log(state.genderFilter) 


  }

  function onGenderChange(e){
    setState({...state, genderFilter: e.target.name })
    
  }
  function onCategoryChange(e){
    setState({...state, categoryFilter: e.target.value })
    console.log(state.categoryFilter)
  }
  
  function onDisplayLoginChange(){
    setState({...state, myButtonLoginIsDisplayed: !state.myButtonLoginIsDisplayed})
    console.log('LoginShown: '+state.myButtonLoginIsDisplayed)
  }
  return (
    <>
      {/* {state.searchIsVisible? <div className='search-dialog-box'><SearchDialog content = {state.result}></SearchDialog> </div> : undefined} */}
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
                {/* <Link to="/login"> */}
                  {!isUserAuthenticated?
                  <button className="btnHome" onClick={() => ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login')) }>
                    <RiLoginCircleFill />
                  </button>:
                  <button className='btnUser' onClick={()=> nav('../user/profile') }>
                    <img className='userImg' src={user?.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU'}></img>
                    <div className='userName'> Hola {user?.name.split(' ')[0] || status.user.name}! </div>
                  </button>}
                {/* </Link> */}

                {/* <Link to={!user?.name?"/login":'/user/favorites'}>               Debajo de esta linea se encuentra un operador ternario dentro de otro!                   */}
                  <button onClick={ () => isUserAuthenticated ? nav('/user/favorites') : ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login') )} className="btnHome" >
                    <AiFillHeart />
                  </button>
                {/* </Link> */}

                {/* <Link to={!user?.name?"/login":'/user/products'}> */}
                  <button onClick={ () => isUserAuthenticated ? nav('/user/products') : ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login'))} className="btnHome">
                    <BsFillCartFill />
                  </button>
                {/* </Link> */}
              </ul>
            </div>
          

            
        </div>
      </div>
          <div>
      
            {state.searchIsVisible?
            <div>
              <div className="category-container">
            <form className="categoryform" onSubmit={(e)=> handleOnSearch(e)}>

               <select className="category-item" onChange={ (e) => onCategoryChange(e) }>
                <option disabled={true}>Seleccione Categoria</option>
                <option>Todas</option>
                <option>Zapatillas</option>
                <option>Pantalones</option>
                <option>Sudaderas</option>
              </select> 
              

              <button type='submit' className={'category-item'} name= 'Dama' onClick={(e) => onGenderChange(e) }>Mujer</button>
              <button type='submit' className={'category-item'} name= 'Caballero' onClick={(e) => onGenderChange(e) }>Hombre</button>
              <button type='submit' className={'category-item'} name= 'Niño' onClick={(e) => onGenderChange(e) }>Niño</button>
            </form>
          </div>
            <div><b>BUSCANDO</b>: {state.search}</div>
            <div>EN: <i>{state.genderFilter}</i></div>
            <Catalog productos = {state.result}></Catalog> 
            </div>

          : undefined}
          </div>
      <div>
      
      {/* Aqui está el boton que cambia el acceso al login entre auth0 directamente o /login */}

      <button className='changelogin' onClick={ ()=> onDisplayLoginChange()  }>{ state.myButtonLoginIsDisplayed?<img className='changeloginImage' src='https://avatars.githubusercontent.com/u/65836423?v=4'></img>:<img  className='changeloginImage' src='https://avatars.githubusercontent.com/u/91890016?v=4'></img>}</button>

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