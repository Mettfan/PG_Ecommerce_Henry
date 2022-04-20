import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsHeart } from 'react-icons/bs';
import './PromotionDetails.css'
import { useDispatch } from 'react-redux';
import { getProduct } from '../../redux/actions/productActions';
import { useSelector } from 'react-redux';

function PromotionDetails() {

    const {id} = useParams();
    const dispatch = useDispatch();

    const details= useSelector( (state) => state.productReducer.producto)
console.log('detalles',details)

    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id])

    

  return (
    <div>
      { details?
     <div className="main-container">
       
      <div className="detailProduct-container">
        <div className="gender-category">
          <p>{details.gender}</p>
        </div>
        <div className="detail-one">
          <div className="detail-one-left">
            {/* <div className="detail-img"> */}
              <img className="detail-img" src={details.image} alt="zapatilla" />
            {/* </div> */}
          </div>
          {/* <div></div> */}
          {/* <div className="detail-arrow"></div> */}
          <div className="detail-one-right">
            <div className="detail-one-name-price"> {details.name} </div>
            <div className="detail-one-sku">SKU: Item No. NI_DC9402-001</div>
            <div className="detail-one-name-price">${details.price}</div>
            <div className="detail-one-cards">Medios de pago</div>
            <div className="detail-one-size">
              <p className="detail-size">Talle {details.size}</p>
              
            </div>
            <div className="detail-one-buttons">
              <button className="detail-button-buy">Agregar al carrito</button>
              <Link to="/home">
              <button>
                {/* <AiFillHeart /> */}
                <BsHeart style={{border: 'none'}}/>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="detail-two">
          <div className="description-left">
              <p>Descripción</p>
          </div>
          <div className="description-right">
            <p className="description-top">Las Zapatillas Nike Air Max Pre-Day Nn están confeccionadas con materiales reciclables. Combinan el estilo vintage del running con nuevas tendencias. La unidad Nike Air en el talón brinda estabilidad y amortiguación de alto rendimiento en cada pisada.</p>
            <div className="description-bottom">
              <div className="description-bottom-p">
                <p>Género: Hombre</p>
                <p>Beneficios: Amortiguación</p>
                <p>Caña: Baja</p>
                <p>Importante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina</p>
                <p>Origen: Importado</p>
              </div>
              <div className="description-bottom-p">
                <p>Adecuado para: Todo el día</p>
                <p>Composición: Capellada: Malla/Sintético / Suela: Goma</p>
                <p>Ajuste: Con Cordones</p>
                <p>Garantía: Contra defecto de fabricación</p>
                <p>Marca: Nike</p>
              </div>
            </div>
          </div>
          </div>
        <div className="detail-three"></div>
        <div className="detail-four"></div>
      </div>
      
      
    </div>:<h2> loading... </h2>}
    </div>
  )
}

export default PromotionDetails