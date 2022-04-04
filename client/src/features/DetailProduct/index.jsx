import './index.css';
import {MdOutlineArrowBack} from 'react-icons/md'
import { BsSuitHeartFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProduct } from '../../redux/actions/productActions';
const DetailProduct = (props) => {

  const {id} = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(getProduct(id))
  }, [dispatch, id])
  
  const productoDetail = useSelector((state) => state.productReducer.producto[0])
  console.log(productoDetail)
  console.log(getProduct(id))
  console.log(productoDetail)

  return (


    <>
    {productoDetail ? 
    
      
      <div className="main-container">
      <div className="detailProduct-container">
        <div className="gender-category">
          <p> {productoDetail.gender} / {productoDetail.category_name} </p>
        <Link to="/home" >
            <MdOutlineArrowBack />
          </Link>
        </div>
        <div className="detail-one">
          <div className="detail-one-left">
            {/* <div className="detail-img"> */}
              <img className="detail-img" src={productoDetail.image} alt="zapatilla" />
              {/* </div> */}
          </div>
          {/* <div></div> */}
          {/* <div className="detail-arrow"></div> */}
          <div className="detail-one-right">
            <h1 className="detail-one-name"> {productoDetail.name} </h1>
            <div className="detail-one-sku">SKU: Item No. NI_{productoDetail.id}  </div>
            <div className="detail-one-price">${productoDetail.price} </div>
            <div className="detail-one-cards">Medios de pago</div>
            <div className="detail-one-size">
              <p className="detail-size">Talles</p>
              
                {productoDetail.size.map(el => <strong key={el}> <div className="detail-sizes2">{el}</div>     </strong>)}
              
              </div>
            <div className="detail-one-buttons">
            <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="detail-button-buy">Agregar al carrito</button>
              </Link>
              
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
            <p className="description-top"> {productoDetail.description}</p> 
            <div className="description-bottom">
              <div className="description-bottom-p">
                <strong>Género:</strong> {productoDetail.gender} <br />
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

  </>
    
  )
}

export { DetailProduct }