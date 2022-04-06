import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import './Home.css'
import { connect } from 'react-redux';
import Catalog from '../Product/Catalog/Catalog'

function Home(props) {

  let [state, setState] = useState({
    productsRendered: 4,
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

  return (
    <>
      {console.log(productos)}
      <NavBar/>





     

        <Catalog productos = {productos.slice(0,state.productsRendered)}></Catalog>


    <button className='scroll-top-button' onClick={() => goTop()}> <img className='go-top-arrow' src='https://cdn2.iconfinder.com/data/icons/arrows-part-3-3/32/arrow-top-1-512.png' alt='GO TOP'></img> </button>

    
    </>
  
  );

}

const mapStateToProps = ( state ) => {
  return{
    productos: state.productReducer.productos
  }
}


export default connect(mapStateToProps)(Home)