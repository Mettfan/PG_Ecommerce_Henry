import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/productActions";
import { createUser } from "../../../redux/actions/userActions";
import data from '../../../fakeData'
import { useNavigate } from "react-router-dom";

export default function AdminView( props){
    let productos = props.productos
    const { loginWithRedirect, user, isAuthenticated } = useAuth0()
    let status = useSelector( state => state.userReducer.status )
    let isUserAuthenticated = isAuthenticated || status
    const dispatch = useDispatch();
    let nav = useNavigate()    
   
    let [state, setState] = useState({
      
      myButtonLoginIsDisplayed: false
    })
  

  
    function onDisplayLoginChange(){
      setState({...state, myButtonLoginIsDisplayed: !state.myButtonLoginIsDisplayed})
      console.log('LoginShown: '+state.myButtonLoginIsDisplayed)
    }
    
    function addUser(){
      console.log( ' Adduser' )
      nav("/admin/user/create")
      
    }
  
    function addProducts(){
      console.log( ' AddProducts' )
    //   console.log(data)
    nav("/admin/products")
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
    
    return ( <>
    
        <div>
                <button className='changelogin' onClick={ ()=> onDisplayLoginChange()  }>{ state.myButtonLoginIsDisplayed?<img className='changeloginImage' src='https://cdn.worldvectorlogo.com/logos/auth0.svg'></img>:<img  className='changeloginImage' ></img>}</button>

                {/* Aqui esta un boton que agrega usuarios automaticamente */}
                <button className='addUser' onClick={ ()=> addUser()  }>{ state.myButtonLoginIsDisplayed?<img className='addUserImage' src='https://cdn-icons-png.flaticon.com/512/72/72648.png'></img>:<img  className='addUserImg' alt=''></img>}</button>

                {/* Aquí esta un botón que llena la database */}
                <button className='fillDB' onClick={ ()=> addProducts()  }>{ state.myButtonLoginIsDisplayed?<img className='fillDBImage' src='https://www.nicepng.com/png/detail/839-8397245_warehouse-free-vector-icons-designed-by-freepik-warehouse.png'></img>:<img  className='fillDBImage' alt=''></img>}</button>


        </div>
    
    </>)
}