
import {MdOutlineArrowBack} from 'react-icons/md'
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../redux/actions/productActions"
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './index.css'
import Cookies from 'universal-cookie';

export default function ProductDetail (props) {

  const {  isAuthenticated, user  } = useAuth0()
  let cookie = new Cookies()


  const [show, setShow] = useState(false)

  let userValidatedSelector = useSelector( state => state.userReducer.status.user )

  // let userValidated = useSelector( state => state.userReducer.status.user )
  let userValidated = cookie.get('user').user

  let isUserAuthenticated = isAuthenticated || userValidated
  

    
    let { id } = useParams()
    let dispatch = useDispatch()
    useEffect(() => {
      if(id) {
        
        dispatch(getProduct(id))
      }
    }, [id, dispatch])
    let product = useSelector( (state) => state.productReducer.producto)
    
    product = product ? product : props.producto
    let nav = useNavigate()
    async function addShoppingCart  (){ 

      if (!isUserAuthenticated) {
        nav('/login')
      } else {

        let usuario = userValidatedSelector || user
        console.log("ASOCIANDO: "+usuario?.email)
        console.log('CON '+id)
        await axios.post('http://localhost:3001/usuario/shopping', { productId: Number(id), userEmail: usuario?.email}).then( response => {
          console.log(response.data)
          dispatch({ type: 'ADD_PRODUCT', payload: response.data })
        },
        (error) => console.log(error))
        setShow(true)
      }



    }
    return (<>
        {product ? 
    
      
    <div className="main-container">
    <div className="detailProduct-container">
      <div className="gender-category">
        <p> {product.gender +'/'+product?.CategoryName}  </p>
        {console.log(product)}
      <Link to="/home" >
          <MdOutlineArrowBack />
        </Link>
      </div>
      <div className="detail-one">
        <div className="detail-one-left">
          {/* <div className="detail-img"> */}
            <img className="detail-img" src={product.image} alt="zapatilla" />
            {/* </div> */}
        </div>
        {/* <div></div> */}
        {/* <div className="detail-arrow"></div> */}
        <div className="detail-one-right">
          <h1 className="detail-one-name"> {product.name} </h1>
          <div className="detail-one-sku">SKU: Item No. NI_{product.id}  </div>
          <div className="detail-one-price">${product.price} </div>
          <div className="detail-one-cards">Medios de pago</div>
          <div className="detail-one-size">
            <p className="detail-size">Talles</p>
            
              {product?.size?.split("-")?.map(el => <strong key={el}> <div className="detail-sizes2">{el}</div>     </strong>)}
            
            </div>
          <p className={show ? 'producto_agregado' : 'producto_sinagregar'}> 🟢 El producto fue agregado al carrito</p>
          <div className="detail-one-buttons">
          {/* <Link to="/login" style={{ textDecoration: 'none' }}> */}
          <button onClick={ () => addShoppingCart()} className="detail-button-buy">Agregar al carrito</button>
            {/* </Link> */}
            
            <Link to="/home" style={{ textDecoration: 'none'}} className="detail-button-like">
            <button style={{border: 'none', background: 'none', textDecoration: 'none' }}>
              <BsSuitHeartFill className="detail-button-like"/>
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="detail-two">
        <div className="description-left">
            <strong>Descripción</strong>
        </div>
        <div className="description-right">
          <p className="description-top"> {product.description}</p> 
          <div className="description-bottom">
            <div className="description-bottom-p">
              <strong>Género:</strong> {product.gender} <br />
              <strong>Beneficios:</strong> Amortiguación<br />
              <strong>Caña:</strong> Baja<br />
              <strong>Importante:</strong> El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina<br />
              <strong>Origen:</strong> Importado<br />
            </div>
            <div className="description-bottom-p">
              <strong>Adecuado para:</strong> Todo el día <br />
              <strong>Composición:</strong> Capellada<br /> 
              <strong>Malla/Sintético / Suela</strong>: Goma<br />
              <strong>Ajuste:</strong> Con Cordones<br />
              <strong>Garantía:</strong> Contra defecto de fabricación<br />
              <strong>Marca:</strong> Nike<br />
            </div>
          </div>
        </div>
        </div>
      <div className="detail-three"></div>
      <div className="detail-four"></div>
    </div>
  </div>
  
  :
  
  <h2>Loading</h2>
  
}
    
    
    </>)

    // return (<div>
    //     PRODUCT DETAIL { ' '+ id}
    //     {console.log(product)}
    //     <div className="detail-one-name">{product?.name}</div>
    //     <div className="detail-one-description">{product?.description}</div>
    //     <div>{product?.size}</div>
    //     <div>{product?.color}</div>
    //     <div>{product?.gender}</div>
    //     <div>{product?.stock}</div>
    //     <div>{product?.price}</div>
    //     <img src={product?.image}></img>

    //     <div>
            
    //     </div>
    // </div>)
}