import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import { FilterByName, getProducts } from '../../redux/actions/productActions';
import Cookies from 'universal-cookie';

function NavBar(props) {
  
  const cookie = new Cookies();
  const user = cookie.get('user');

  const nav = useNavigate()

  const dispatch = useDispatch();
  const statusCart = useSelector( state => state )
  const ProductosParaMostrar = statusCart.shoppingCartReducer.productos?.msg

  useEffect(() => {
    props.getProducts()
  },[])

  //Creamos el estado en donde se guardara la busqueda ingresada por el usuario y el resultado
  let [state, setState] = useState({
    search: '',
    result: [],
    searchIsVisible: false,
    genderFilter: 'All',
    categoryFilter: 'All',
    myButtonLoginIsDisplayed: false,
    interruptor: false
  })

  //Creamos la función con la que guardaremos lo que escribe el usuario en la barra de busqueda
  function handleOnChange (e) {
    setState({
      ...state, 
      search: e.target.value,
    })
  }
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
  return (
    <>
      <div className="header">
        <div className="home-container">
          <img src={logo} onClick={() => switchLanding()} className="logo" alt="a " />

          <div className="sb_nav">
            <form id="Find" className="Find" onSubmit={(e) => handleSubmit(e)} >
              <div className="sb_searchcontainer">
                <input
                  id="form"
                  type="text"
                  placeholder="Busca tu articulo"
                  className="inputSearch"
                  value={name}
                  onChange={(e) => { handleInputChange(e); }}
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

          </div>

            <div className="userbuttons-container">
              <ul className="main-nav">
              {!user
                ? <button className="btnHome" onClick={() => nav('/login')}>
                    <RiLoginCircleFill />
                </button>

                : <button className='btnUser' onClick={() => nav('../user/profile')}>
                  <img className='userImg' src={user?.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU'} alt=' ' width={30} />
                  <div className='userName'> Hola {user?.name.split(' ')[0]}! </div>
                </button>}

              <button onClick={() => user ? nav('/user/favorites') : nav('/login')} className="btnHome" >
                    <AiFillHeart />
              </button>

              <button onClick={() => user ? nav('/user/products') : nav('/login')} className="btnHome">
                <BsFillCartFill /> {user ? <div className="numeroCantidadCart"> {user ? ProductosParaMostrar?.length : ''} </div> : null}
              </button>
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