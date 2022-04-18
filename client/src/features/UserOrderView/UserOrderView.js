
import {useNavigate } from 'react-router-dom';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import './index.css'
import data from './fake'
//import CardSlim from "../../components/CardSlim/CardSlim";
// import {getUserOrder} from "../../actions/userOrderActions";

export default function ProductDetail () {
  
const datas= data
  // const {  isAuthenticated, user  } = useAuth0()
  // let userValidated = useSelector( state => state.userReducer.status.user )
  // let isUserAuthenticated = isAuthenticated || userValidated

  // let datas = useSelector( (state) => state.productReducer.order)

  // let nav = useNavigate()
  
  //   let dispatch = useDispatch()
  //   let { id } = useParams()

  //   useEffect(() => {
  //     dispatch({
  //        dispatch(getOrder(id))
  //   }, [dispatch, id])

   return (<>
    <div >
      <div>
       <div><h3> Tu numero de orden es {datas.id}</h3></div>
        <div><h3>Producto/s: {datas.product}</h3></div>
       
       { datas && datas?.map((product) => {
            return (
                <div >
      <div><img src={ product.image } alt="imagen rota" width="70px"></img></div>
      <div><h5> {product.name}</h5></div>
      <div>Talle: {product.size}  </div>
      <div>Color: {product.color}</div>
      <div>Cantidad: {product.quantify}</div>
      <div>Precio: $ {product.price} </div>
      <div>-----------------------------------------------</div>
                </div>
             )
            })}:
   </div>
  </div>
   </>)
}






