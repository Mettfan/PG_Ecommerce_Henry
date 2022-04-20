import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import { FilterByName, getProducts } from '../../redux/actions/productActions';

import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'universal-cookie';

function NavBar(props) {
  const {pathname} = window.location;
  let nav = useNavigate()
  // let productos = props.productos
  let cookie = new Cookies ()
  const { loginWithRedirect,  isAuthenticated } = useAuth0()
  // let status = useSelector( state => state.userReducer.status )
  console.log('cookie.get', cookie.get('user'))
  let user = cookie.get('user')?.user
  let isUserAuthenticated = isAuthenticated || user
  const dispatch = useDispatch();

  const statusCart = useSelector( state => state )
  const ProductosParaMostrar = statusCart.shoppingCartReducer.productos?.msg

  useEffect(()=>{
    dispatch(getProducts());
  },[])

  let [state, setState] = useState({
    search: '',
    result: [],
    searchIsVisible: false,
    genderFilter: 'All',
    categoryFilter: 'All',
    myButtonLoginIsDisplayed: false,
    interruptor: false
  })

  const[name, setName] = useState('')


  function handleInputChange(event) {
      event.preventDefault();
      setName(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
      event.preventDefault();
      dispatch(FilterByName(name))
      setName('');
  }
  
  function switchLanding(){
    nav( state.interruptor  ? "/" : "/home")
    setState({...state, interruptor: !state.interruptor})
  }

  console.log('productos length', ProductosParaMostrar?.length)

  return ( !pathname.includes("admin")  &&
    <>
      <div className="header">
        
        <div className="home-container">
          
            <img src={logo} onClick={ ( ) => switchLanding()} className="logo" alt="a " />            
            
            <div className="sb_nav">
              { pathname !== "/" &&
                <form id="Find" className="Find"  onSubmit={(e) => handleSubmit(e)} >
                  <div className="sb_searchcontainer">
                    <input
                      id="form"
                      type="text"
                      placeholder="Busca tu articulo"
                      className="inputSearch"
                      value={name}
                      onChange ={(e) => {handleInputChange(e)}}
                    />
                    <button id="sb_send" type="submit" className="submitBtn">
                    
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fsearch-button-png-search-icon-this-icon-is-supposed-to-represent-a-magnifying-glass-it-s-a-large-png-50-px-1600.png&f=1&nofb=1"
                        alt="img not found"
                        width="20"
                        height="20"
                        />
                    </button>
                  </div>
                </form>
              }
            </div>

            <div className="userbuttons-container">
              <ul className="main-nav">
                  {!isUserAuthenticated?
                  <button className="btnHome" onClick={() => ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login')) }>
                    <RiLoginCircleFill />
                  </button>:
                  <button className='btnUser' onClick={()=> nav('../user/profile') }>
                    <img className='userImg' src={user?.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU'}></img>
                    <div className='userName'> Hola {user?.name?.split(' ')[0] }! </div>
                  </button>}
                  <button onClick={ () => isUserAuthenticated ? nav('/user/favorites') : ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login') )} className="btnHome" >
                    <AiFillHeart />
                  </button>
                  <button onClick={ () => isUserAuthenticated ? nav('/user/products') : ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login'))} className="btnHome">
                    <BsFillCartFill /> 
                      { ProductosParaMostrar?.length > 0 &&
                        <div className="numeroCantidadCart"> 
                            { isUserAuthenticated && ProductosParaMostrar?.length } 
                        </div>
                      }
                  </button>
              </ul>
            </div>
          </div>
      </div>
          <div>
      
            {state.searchIsVisible?
            <div>

            </div>

          : undefined}
          </div>
      <div>
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