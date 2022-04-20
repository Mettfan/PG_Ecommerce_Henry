import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import { createProduct, FilterByName, getProducts } from '../../redux/actions/productActions';
//import SearchDialog from './SearchDialog/SearchDialog';
//import Catalog from '../Product/Catalog/Catalog';
import { useAuth0 } from '@auth0/auth0-react';
//import maxiLoginImg from '../../assets/LOGO_BOOMA_simple.jpg'
import { createUser } from '../../redux/actions/userActions';
import data from '../../fakeData'
import AdminView from './AdminView/AdminView';
import Cookies from 'universal-cookie';

function NavBar(props) {
  let productos = props.productos
  let cookie = new Cookies ()
  const { loginWithRedirect,  isAuthenticated } = useAuth0()
  // let status = useSelector( state => state.userReducer.status )
  let user = cookie.get('user')?.user
  let isUserAuthenticated = isAuthenticated || user
  const dispatch = useDispatch();
  

  const statusCart = useSelector( state => state )
  const ProductosParaMostrar = statusCart.shoppingCartReducer.productos?.msg

  //console.log(ProductosParaMostrar)


  let nav = useNavigate()
  useEffect(()=>{

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
      //console.log(name, 'HandleChange')
  }

  function handleSubmit(event) {
      event.preventDefault();
      dispatch(FilterByName(name))
      setName('');
      //console.log(name, 'HandleSubmit')
  }


  function onDisplayLoginChange(){
    setState({...state, myButtonLoginIsDisplayed: !state.myButtonLoginIsDisplayed})
    //console.log('LoginShown: '+state.myButtonLoginIsDisplayed)
  }

  function addUser(){
    //console.log( ' Adduser' )
    dispatch(createUser(  {
      name: "Yomero", 
      lastName : "asdAA", 
      gender: "Femenino", 
      dni : "asdasd", 
      born : "12/05/1977", 
      email: "admin@gmail.com", 
      address: "morfeo 13", 
      province: "san juan", 
      phone: "1234343432", 
      password: "12345AbC",
      permission: "admin"
      }))
  }

  function addProducts(){
    //console.log( ' AddProducts' )
    //console.log(data)
    data?.map( producto => {
      return dispatch(createProduct(  {
        name: producto.name,
        description:  producto.description,
        size:  producto.size,
        color: producto.color,
        gender: producto.gender,
        stock: producto.stock,
        price: producto.price,
        image: producto.image,
        category: producto.category
    }))
    })
    
    
  }
 
  
  function switchLanding(){
    nav( state.interruptor  ? "/" : "/home")
    setState({...state, interruptor: !state.interruptor})
  }
  return (
    <>
      {/* {state.searchIsVisible? <div className='search-dialog-box'><SearchDialog content = {state.result}></SearchDialog> </div> : undefined} */}
      <div className="header">
        
        <div className="home-container">
          

            {/* <Link to={url_ref?"/home":"/"}> */}
              <img src={logo} onClick={ ( ) => switchLanding()} className="logo" alt="a " />
            {/* </Link> */}
            

            <div className="sb_nav">
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
                    <div className='userName'> Hola {user?.name?.split(' ')[0] }! </div>
                  </button>}
                {/* </Link> */}

                {/* <Link to={!user?.name?"/login":'/user/favorites'}>               Debajo de esta linea se encuentra un operador ternario dentro de otro!                   */}
                  <button onClick={ () => isUserAuthenticated ? nav('/user/favorites') : ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login') )} className="btnHome" >
                    <AiFillHeart />
                  </button>
                {/* </Link> */}

                {/* <Link to={!user?.name?"/login":'/user/products'}> */}
                  <button onClick={ () => isUserAuthenticated ? nav('/user/products') : ( state.myButtonLoginIsDisplayed ? loginWithRedirect() : nav('/login'))} className="btnHome">
                    <BsFillCartFill /> <div className="numeroCantidadCart"> {isUserAuthenticated ? ProductosParaMostrar?.length : 0} </div>
                  </button>
                {/* </Link> */}
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
      
      
      <AdminView>

        
      </AdminView>
      {/* Aqui está el boton que cambia el acceso al login entre auth0 directamente o /login */}
      {/* <button className='changelogin' onClick={ ()=> onDisplayLoginChange()  }>{ state.myButtonLoginIsDisplayed?<img className='changeloginImage' src='https://cdn.worldvectorlogo.com/logos/auth0.svg'></img>:<img  className='changeloginImage' src={maxiLoginImg}></img>}</button> */}

      {/* Aqui esta un boton que agrega usuarios automaticamente */}
      {/* <button className='addUser' onClick={ ()=> addUser()  }>{ state.myButtonLoginIsDisplayed?<img className='addUserImage' src='https://cdn-icons-png.flaticon.com/512/72/72648.png'></img>:<img  className='addUserImg' alt=''></img>}</button> */}

      {/* Aquí esta un botón que llena la database */}
      {/* <button className='fillDB' onClick={ ()=> addProducts()  }>{ state.myButtonLoginIsDisplayed?<img className='fillDBImage' src='https://www.nicepng.com/png/detail/839-8397245_warehouse-free-vector-icons-designed-by-freepik-warehouse.png'></img>:<img  className='fillDBImage' alt=''></img>}</button> */}
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