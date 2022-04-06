import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png';
import './NavBar.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getProducts, FilterByName } from '../../redux/actions/productActions';
import SearchDialog from './SearchDialog/SearchDialog';
import Catalog from '../Product/Catalog/Catalog';
import { useAuth0 } from '@auth0/auth0-react';


function NavBar(props) {
  let productos = props.productos;
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  let status = useSelector(state => state.userReducer.status);
  let isUserAuthenticated = isAuthenticated || status;
  const dispatch = useDispatch();

  let nav = useNavigate();
  useEffect(() => {
    //console.log('gettingProducts');
    props.getProducts();

  }, []);

  //Creamos el estado en donde se guardara la busqueda ingresada por el usuario y el resultado
  let [state, setState] = useState({
    search: '',
    result: [],
    searchIsVisible: false,
    genderFilter: 'All',
    categoryFilter: 'All',
    myButtonLoginIsDisplayed: false
  });

  //Creamos la función con la que guardaremos lo que escribe el usuario en la barra de busqueda
  function handleOnChange(e) {
    setState({
      ...state,
      search: e.target.value,
    });
  }
  const [name, setName] = useState('');


  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value.toLowerCase());
    //console.log(name, 'HandleChange');
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(FilterByName(name));
    setName('');
    //console.log(name, 'HandleSubmit');
  }


  function onDisplayLoginChange() {
    setState({ ...state, myButtonLoginIsDisplayed: !state.myButtonLoginIsDisplayed });
    //console.log('LoginShown: ' + state.myButtonLoginIsDisplayed);
  }
  return (
    <>
      {/* {state.searchIsVisible? <div className='search-dialog-box'><SearchDialog content = {state.result}></SearchDialog> </div> : undefined} */}
      <div className="header">
        <div className="home-container">
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
        </div>

        <div className="userbuttons-container">
          <ul className="main-nav">

            {/* <Link to="/login"> */}
            {/* {!isUserAuthenticated?
                  <button className="btnHome" onClick={() => ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login')) }> */}


            {!isUserAuthenticated
              ?
              <Link to="/login">
                <button className="btnHome">
                  <RiLoginCircleFill />
                </button>
              </Link>
              :
              <button className='btnUser' onClick={() => nav('../user/profile')}>
                <img className='userImg' src={user?.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3-fxYXhHbPLtDz72SAnRopI8b22xxS-SHCNTp8VpPP8GuOD4Ix3kxB3OokobuqGctVE&usqp=CAU'}></img>
                <div className='userName'> Hola {user?.name.split(' ')[0] || status.user.name}! </div>
              </button>}

            {/* <Link to={!user?.name?"/login":'/user/favorites'}>               Debajo de esta linea se encuentra un operador ternario dentro de otro!                   */}
            <button onClick={() => isUserAuthenticated ? nav('/user/favorites') : (state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login'))} className="btnHome" >
              <AiFillHeart />
            </button>
            {/* </Link> */}

            {/* <Link to={!user?.name?"/login":'/user/products'}> */}
            <button onClick={() => isUserAuthenticated ? nav('/user/products') : (state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login'))} className="btnHome">
              <BsFillCartFill />
            </button>
            {/* </Link> */}
          </ul>
        </div>
      </div>
      <div>

        {/* Aqui está el boton que cambia el acceso al login entre auth0 directamente o /login */}

        <button className='changelogin' onClick={() => onDisplayLoginChange()}>{state.myButtonLoginIsDisplayed ? <img className='changeloginImage' src='https://avatars.githubusercontent.com/u/65836423?v=4'></img> : <img className='changeloginImage' src='https://avatars.githubusercontent.com/u/91890016?v=4'></img>}</button>

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