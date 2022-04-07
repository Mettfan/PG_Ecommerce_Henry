import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './Home.css'
import { connect } from 'react-redux';
import Catalog from '../Product/Catalog/Catalog'
// import SearchDialog from '../NavBar/SearchDialog/SearchDialog';
import { useAuth0 } from '@auth0/auth0-react'
import {MdOutlineArrowDropUp, MdOutlineArrowDropDown} from 'react-icons/md'


function Home(props) {

  const { isAuthenticated } = useAuth0()

  let nav = useNavigate()

  let [state, setState] = useState({
    productsRendered: 8,
  })
  
  var productos = props.productos
  function loadMoreProducts() {
    if(state.productsRendered!==productos.length){
      console.log(state.productsRendered)
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
    console.log('GO TOP')
  }


  useEffect (()=>{
    document.querySelector(".dropdown-container span").addEventListener("click", function() {
      document.querySelector(".dropdown-container ul").classList.toggle("show");
    });
    
    
    document.querySelector(".dpcontainer1 span").addEventListener("click", function() {
      document.querySelector(".dpcontainer1 ul").classList.toggle("show");
    });
    
    
    document.querySelector(".dcontainer2 span").addEventListener("click", function() {
      document.querySelector(".dcontainer2 ul").classList.toggle("show");
    });


  })

  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)

  return (
    <>
      {console.log(productos)}
      {/* <NavBar/> */}
      {/* <SearchDialog content = {productos}></SearchDialog> */}

      <div className="home-filtersandcard">
        <div className="home-filter">

        <div className="dropdown-container"  >
          <span onClick={() => setToggle(!toggle)} >Mi filtro  </span> 
            
            <ul>
              <li>asdasdasd</li>
              <li>asdasdasd</li>
              <li>asdasdasda</li>
            </ul>
        </div>
        <div className="dpcontainer1">
          <span>Mi otro fitro</span>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
        </div>
        <div className="dcontainer2">
          <span>Otro más</span>
            <ul>
              <li>213123</li>
              <li>123</li>
              <li>asda32423523sdasda</li>
            </ul>
        </div>


        </div>

        <div className="home-cards">
          <Catalog
            productos={productos.slice(0, state.productsRendered)}
          ></Catalog>
        </div>
      </div>

      <button className="scroll-top-button" onClick={() => goTop()}>
        {" "}
        <img
          className="go-top-arrow"
          src="https://cdn2.iconfinder.com/data/icons/arrows-part-3-3/32/arrow-top-1-512.png"
          alt="GO TOP"
        ></img>{" "}
      </button>
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