
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
import { getReviews } from '../../redux/actions/reviewsActions';

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

      setTimeout(() => {
        
        
        if(id) {
          
          dispatch(getProduct(id))
        }
      }, 1000);
    }, [dispatch, id])

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

    useEffect(() => {
      dispatch(getReviews())
    }, [])
    let reviews = useSelector( (state) => state.reviewsReducer.reviews.review)
    console.log(reviews, 'reviews useSelector')
    const reviesWithName = reviews?.filter(r => r.UserId) 
    console.log(reviesWithName, 'reviews with name')
    const reviewsOfTheProduct = reviesWithName?.filter(r => r.ProductId === Number(id))
    console.log(reviewsOfTheProduct, 'reviews of the product')
    
    return (

      <>
      
      { 
        product.id
        ? 
        <div>
      
      {
        
        product ? 
    
      
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
              <div className="sizesMap">
            {
              product.stock_by_size.map(size => {
                return <div>
                            <span className="detail-sizes2">
                              <span className="sizes2Size"> {size.size}  </span>
                                <span className="sizes2NumerOfSize">{size.stock} </span><br />
                             </span>
                        </div>
              })
            }
            
              </div>
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
              <strong>Marca:</strong> {product.brand} <br />
              <strong>Género:</strong> {product.gender} <br />
              <strong>Importante:</strong> {product.important_data} <br />
              <strong>Origen:</strong> {product.origin} <br />
              <strong>Adecuado para:</strong> {product.suitable_for} <br />
            </div>
            <div className="description-bottom-p">
              <strong>Composición:</strong> {product.composition} <br /> 
              <strong>Color:</strong> {product.color} <br />
              <strong>Garantía:</strong> {product.warranty}<br />
              <strong>Extras</strong>: {product.extras} <br />
            </div>
          </div>
        </div>
        </div>
      <div >
        <h1 className="detail-three-titleh1">VALORACIONES Y RESEÑAS</h1>
      </div>
            <p>Valoración general</p>
            <div className="detail-three-comments">
             <p className="detail-three-valoracion">★ ★ ★ ★ ✩ 4.0 </p>
             <Link to="/home" style={{ textDecoration: 'none' }}>
              <button className="detailThreeButton">HACÉ TU RESEÑA</button>
             </Link>
            </div>
            {
              reviewsOfTheProduct && reviewsOfTheProduct.length != 0 ?
              <>
              <h2 className="comentariosTitulo">Comentarios</h2>
             
              {
                
                
                reviewsOfTheProduct?.map(review => (
                  <div className="divComments">
                    
                    <strong> {review?.User?.name} </strong>
                    <strong> {review?.User?.lastName} </strong>
                    {
                    review?.rating == 1 ? <p>★ ✩ ✩ ✩ ✩</p> 
                    : 
                    review?.rating == 2 ? <p>★ ★ ✩ ✩ ✩</p> 
                    :
                    review?.rating == 3 ? <p>★ ★ ★ ✩ ✩</p> 
                    :
                    review?.rating == 4 ? <p>★ ★ ★ ★ ✩</p> 
                    :
                    review?.rating == 5 ? <p>★ ★ ★ ★ ★</p> 
                    :
                    null
                    
                    }
                    <span>  </span>
                    <p> {review?.comment} </p>
                    
                  </div>
                ))
              }
             
             
              </>
              :
              <p>¡Sé el primero en hacer una reseña!</p>
            }
      <div className="detail-four">

      </div>
    </div>
  </div>
  
  :
  
  <h2>Loading</h2>
  
}
      
      
        </div>
      
        :
        <div className="loading">
            
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </div>
      }
      </>

    
    
    
    
    )


}