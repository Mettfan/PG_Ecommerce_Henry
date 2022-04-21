import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png';
import './NavBar.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FilterByName, getProducts } from '../../redux/actions/productActions';
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'universal-cookie';

function NavBar(props) {

  const cookie = new Cookies();
  const userDB = cookie.get('user');

  const { user } = useAuth0();
  const usuario = user || userDB;

  const dispatch = useDispatch();
  const { pathname } = window.location;

  const nav = useNavigate();
  const statusCart = useSelector(state => state);
  const ProductosParaMostrar = statusCart.shoppingCartReducer.productos?.msg;

  useEffect(() => {
    props.getProducts();
  }, []);

  let [state, setState] = useState({
    search: '',
    result: [],
    searchIsVisible: false,
    genderFilter: 'All',
    categoryFilter: 'All',
    myButtonLoginIsDisplayed: false,
    interruptor: false
  });

  const [name, setName] = useState('');


  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(FilterByName(name));
    setName('');
  }


  function switchLanding() {
    nav(state.interruptor ? "/" : "/home");
    setState({ ...state, interruptor: !state.interruptor });
  }
  return ((!pathname.includes("admin") && pathname !== "/createproducts") &&
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
            {!usuario
              ? <button className="btnHome" onClick={() => nav('/login')}>
                <RiLoginCircleFill />
              </button>

              : <button className='btnUser' onClick={() => nav('../user/profile')}>
                <img className='userImg' src={usuario?.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU'} alt=' ' width={30} />
                <div className='userName'> Hola {usuario && usuario.name?.split(' ')[0]}! </div>
              </button>}

            <button onClick={() => usuario ? nav('/user/favorites') : nav('/login')} className="btnHome" >
              <AiFillHeart />
            </button>

            <button onClick={() => usuario ? nav('/user/products') : nav('/login')} className="btnHome">
              <BsFillCartFill /> {usuario ? <div className="numeroCantidadCart"> {usuario ? ProductosParaMostrar?.length : ''} </div> : null}
            </button>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productos: state.productReducer.productos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);