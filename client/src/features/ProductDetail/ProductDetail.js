import { MdOutlineArrowBack } from 'react-icons/md';
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/actions/productActions";
import './index.css';
import { addProductFavorite } from '../../redux/actions/favoriteActions';
import { addProduct } from '../../redux/actions/shoppingCartActions';

import Cookies from 'universal-cookie';
import { getReviews } from '../../redux/actions/reviewsActions';
import axios from 'axios';

export default function ProductDetail(props) {

export default function ProductDetail (props) {
  let { id } = useParams()
  let cookie = new Cookies()
  let dispatch = useDispatch()
  let nav = useNavigate()
  let product = useSelector( (state) => state.productReducer.producto)

  let userValidated = useSelector( state => state.userReducer.status.user ) || cookie.get('user').user

  // let statusFav = useSelector( state => state.favoriteReducer.status )



  let { id } = useParams();
  let cookie = new Cookies();
  let dispatch = useDispatch();

  let product = useSelector((state) => state.productReducer.producto);
  const user = cookie.get('user');

  useEffect(() => {


    setTimeout(() => {



    

    const [show, setShow] = useState(false)
    
    
    
    const email = cookie.get('user').user?.email
  
    const addShoppingCart = () => { 
      
      axios.post(`http://localhost:3001/usuario/shopping`, { productId: Number(id), userEmail: email}).then( response => {
        console.log(response.data)
        dispatch({ type: 'ADD_PRODUCT', payload: response.data })
        cookie?.set('shopping', response.data, { path: '/' });
        window.location.reload();
      })
      setShow(true)
    }

    const addFavorites = () => { 
      dispatch(addProductFavorite({ productId: Number(id), email: email}))
    }

      if (id) {

        dispatch(getProduct(id));
      }
    }, 1000);
  }, [dispatch, id]);


  product = product ? product : props.producto;



  product = product ? product : props.producto;


    console.log('cookie cart', cookie?.get('shopping'))
    useEffect(() => {
      if (email) {
        axios.post(`http://localhost:3001/usuario/shopping`, { productId: Number(1000), userEmail: email }).then(response => {
          console.log(response.data);
          dispatch({ type: 'ADD_PRODUCT', payload: response.data });
          cookie?.set('shopping', response.data, { path: '/' });
      });
      }
  
    });


  const addShoppingCart = () => {
    dispatch(addProduct({ productId: Number(id), userEmail: user?.email }));
    setShow(true);
  };


  const addFavorites = () => {
    dispatch(addProductFavorite({ productId: Number(id), email: user?.email }));
  };



  let reviews = useSelector((state) => state.reviewsReducer.reviews.review);
  //console.log(reviews, 'reviews useSelector');
  const reviesWithName = reviews?.filter(r => r.UserId);
  //console.log(reviesWithName, 'reviews with name');
  const reviewsOfTheProduct = reviesWithName?.filter(r => r.ProductId === Number(id));
  //console.log(reviewsOfTheProduct, 'reviews of the product');

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  return (

    <>

      {
        product.id
          ?
          <div>

            {

              product.stock_by_size.map((size, i) => {
                return <div key={i}>
                            <span className="detail-sizes2">
                              <span className="sizes2Size"> {size.size}  </span>
                                <span className="sizes2NumerOfSize">({size.stock}) </span><br />
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


              product ?


                <div className="main-container">
                  <div className="detailProduct-container">
                    <div className="gender-category">
                      <p> {product.gender + '/' + product?.CategoryName}  </p>
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
                              product.stock_by_size?.map(size => {
                                return <div>
                                  <span className="detail-sizes2">
                                    <span className="sizes2Size"> {size.size}  </span>
                                    <span className="sizes2NumerOfSize">({size.stock}) </span><br />
                                  </span>
                                </div>;
                              })
                            }

                          </div>
                        </div>
                        <p className={show ? 'producto_agregado' : 'producto_sinagregar'}> 🟢 El producto fue agregado al carrito</p>
                        <div className="detail-one-buttons">
                          {/* <Link to="/login" style={{ textDecoration: 'none' }}> */}
                          <button onClick={() => addShoppingCart()} className="detail-button-buy">Agregar al carrito</button>
                          {/* </Link> */}

                          <Link to="/home" style={{ textDecoration: 'none' }} className="detail-button-like">
                            <button style={{ border: 'none', background: 'none', textDecoration: 'none' }}>
                              <BsSuitHeartFill className="detail-button-like" />
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

                ))
              }
             
             
              </>
              :
              <h3  style={{ margin: '5% auto'}}>¡Sé el primero en hacer una reseña!</h3>

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





  );
}