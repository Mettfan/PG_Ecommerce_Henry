import React from 'react'
import Card from '../CardTemplate/Card'
import NavBar from '../NavBar/NavBar'
import './Promotions.css'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import {getProducts} from '../../redux/actions/productActions'
import Cookies from 'universal-cookie';

function Promotions() {

  let cookie = new Cookies()
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getProducts());
}, [dispatch]);

  
  const productos= useSelector( (state) => state.productReducer.productos) ||cookie.get('product')
  console.log('productos', productos)
  const discount=productos.filter(el=>el.discount!==0)
  console.log('discount', discount)
  
  
  return (
    <>

    

    <img src="https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw498d0dc7/01abr/full3pony.jpg?sw=1440&sfrm=png" alt="" width="100%" />

    <h1>Descuentos</h1>

    <div className="promotions-cardcontainer">
        

{
  
  discount?.map((el,i) => {
               return(
                
                <div>
               <Card  
                        key={i}
                        image={el.image}
                        name={el.name}
                        id={el.id}
                        price={el.price}
                        discount={el.discount}
                        />
                        
                        </div>
                        
                  );})}
                 
    </div>
    </>
  )}


export default Promotions