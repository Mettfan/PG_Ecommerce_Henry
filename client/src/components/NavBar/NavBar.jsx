import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiLoginCircleFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../../assets/Booma_logo_backless_white.png'
import './NavBar.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import { createProduct, FilterByName, getProducts } from '../../redux/actions/productActions';
import SearchDialog from './SearchDialog/SearchDialog';
import Catalog from '../Product/Catalog/Catalog';
import { useAuth0 } from '@auth0/auth0-react';
import maxiLoginImg from '../../assets/LOGO_BOOMA_simple.jpg'
import { createUser } from '../../redux/actions/userActions';


function NavBar(props) {
  let productos = props.productos
  const { loginWithRedirect, user, isAuthenticated } = useAuth0()
  let status = useSelector( state => state.userReducer.status )
  let isUserAuthenticated = isAuthenticated || status
  const dispatch = useDispatch();
  
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
  const[name, setName] = useState('')


  function handleInputChange(event) {
      event.preventDefault();
      setName(event.target.value.toLowerCase());
      console.log(name, 'HandleChange')
  }

  function handleSubmit(event) {
      event.preventDefault();
      dispatch(FilterByName(name))
      setName('');
      console.log(name, 'HandleSubmit')
  }


  function onDisplayLoginChange(){
    setState({...state, myButtonLoginIsDisplayed: !state.myButtonLoginIsDisplayed})
    console.log('LoginShown: '+state.myButtonLoginIsDisplayed)
  }

  function addUser(){
    console.log( ' Adduser' )
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
    console.log( ' AddProducts' )


    
    dispatch(createProduct(  {
      name: 'Nike Adidas',
      description: 'Descripcion',
      size: 'X-M-L',
      color: "ASDASXAS",
      gender: 'Caballero',
      stock: 12,
      price: 13,
      image: 'data:image/png;base64,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',
      category: 'Remera'
  }))
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

            </div>

          : undefined}
          </div>
      <div>
      
      
      {/* Aqui está el boton que cambia el acceso al login entre auth0 directamente o /login */}
      <button className='changelogin' onClick={ ()=> onDisplayLoginChange()  }>{ state.myButtonLoginIsDisplayed?<img className='changeloginImage' src='https://cdn.worldvectorlogo.com/logos/auth0.svg'></img>:<img  className='changeloginImage' src={maxiLoginImg}></img>}</button>

      {/* Aqui esta un boton que agrega usuarios automaticamente */}
      <button className='addUser' onClick={ ()=> addUser()  }>{ state.myButtonLoginIsDisplayed?<img className='addUserImage' src='https://cdn-icons-png.flaticon.com/512/72/72648.png'></img>:<img  className='addUserImg' alt=''></img>}</button>

      {/* Aquí esta un botón que llena la database */}
      <button className='fillDB' onClick={ ()=> addProducts()  }>{ state.myButtonLoginIsDisplayed?<img className='fillDBImage' src='https://www.nicepng.com/png/detail/839-8397245_warehouse-free-vector-icons-designed-by-freepik-warehouse.png'></img>:<img  className='fillDBImage' alt=''></img>}</button>
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