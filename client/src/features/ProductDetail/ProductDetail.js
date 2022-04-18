import {MdOutlineArrowBack} from 'react-icons/md'
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct, deleteProductAction } from "../../redux/actions/productActions"
import { useAuth0 } from '@auth0/auth0-react';
import './index.css'

import { addProductFavorite } from '../../redux/actions/favoriteActions';
import { addProduct } from '../../redux/actions/shoppingCartActions';

import Cookies from 'universal-cookie';


export default function ProductDetail (props) {
  let { id } = useParams()
  let cookie = new Cookies()
  let dispatch = useDispatch()
  let nav = useNavigate()
  let product = useSelector( (state) => state.productReducer.producto)
  let userValidated = useSelector( state => state.userReducer.status.user ) || cookie.get('user').user 
  // let statusFav = useSelector( state => state.favoriteReducer.status )
  const {  isAuthenticated, user  } = useAuth0()

  // let userValidated = 
  let isUserAuthenticated = isAuthenticated || userValidated
  let usuario = userValidated || user

  // console.log('userValidated', userValidated)

    useEffect(() => {
      if(id) {
        dispatch(getProduct(id))
      }

      return function deleteProduct(){
        dispatch(deleteProductAction())
      }
    }, [])

    
    product = product ? product : props.producto

    const addShoppingCart = () => { 
      dispatch(addProduct({ productId: Number(id), userEmail: usuario?.email}))
    }

    const addFavorites = () => { 
      dispatch(addProductFavorite({ productId: Number(id), email: usuario?.email}))
      // nav(!isUserAuthenticated?'../login':'../user/favorite')
    }

    return (<>
        {product 
          ? 
            <div className="main-container">
              <div className="detailProduct-container">
                <div className="gender-category">
                  <p> {product.gender +'/'+product?.CategoryName}  </p>
                  <div className="arrowBack">
                    <Link to="/home" >
                      <MdOutlineArrowBack />
                    </Link>
                  </div>
                </div>
                <div className="detail-one">
                  <div className="detail-one-left">
                      <img className="detail-img" src={product.image} alt="zapatilla" />
                  </div>
                  <div className="detail-one-right">
                    <h1 className="detail-one-name"> {product.name} </h1>
                    <div className="detail-one-sku">SKU: Item No. NI_{product.id}  </div>
                    <div className="detail-one-price">${product.price} </div>
                    <div className="detail-one-cards">Medios de pago</div>
                    <div className="detail-one-size">
                      <p className="detail-size">Talles</p>
                      
                        {product?.size?.split("-")?.map(el => <strong key={el}> <div className="detail-sizes2">{el}</div>     </strong>)}
                      
                      </div>
                    <div className="detail-one-buttons">
                      <button onClick={ () => addShoppingCart()} className="detail-button-buy">Agregar al carrito</button>
                      <button onClick={ () => addFavorites()} style={{border: 'none', background: 'none', textDecoration: 'none' }}>
                        <BsSuitHeartFill className="detail-button-like"/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="detail-two">
                  <div className="description-left">
                      <strong>Descripción</strong>
                  </div>
                  <div className="description-right">
                    <p className="description-top-detail"> {product.description}</p> 
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
              </div>
            </div>
          :
          <h2>Loading</h2>
        }
    
    
    </>
  )
}