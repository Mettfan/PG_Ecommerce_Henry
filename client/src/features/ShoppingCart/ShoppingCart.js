import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getShoppingList} from '../../redux/actions/shoppingCartActions'
import CardSlim from "../../components/CardSlim/CardSlim"
import { Link } from "react-router-dom"
import './ShoppingCart.css'
export default function ShoppingCart ( ) {

    let {  isAuthenticated, user  } = useAuth0()
    
    let userValidated = useSelector( state => state.userReducer.status.user )
    let ProductosParaMostrar = useSelector( state => state.shoppingCartReducer.shoppingList )
    // let isUserAuthenticated = isAuthenticated || userValidated
    const status = useSelector( state => state )
    const userRed  = status.userReducer
    const shopping = status.shoppingCartReducer
    const dispatch = useDispatch()
    const [select, setSelect] = useState("Retiro por la tienda");
    const [count, setCount] = useState(3);
    const subtotal = useSelector((state) => state.productReducer.totalCart);
    let usuario = userValidated || user
    // const status = useSelector((state) => state.productReducer.status);
    const total = subtotal?.reduce((a,b) => a + b).toFixed(2);

    const handleSelect = (e) => {
            setSelect(e.target.value);
     }
 
     const handleContinue = () => {
         console.log('CONTINUAR')
         setCount(0);
     }

    useEffect(() => {
        dispatch(getShoppingList({userEmail: usuario?.email}))
    },[])
    
     console.log(ProductosParaMostrar)

    return (<>
            {
                ProductosParaMostrar.length > 0
                ? 
                    <div className="shopping-cart-container">
        <div className="into-container">
            <div className="cart-container-1">
                <div className="title-container">
                    <h2>¿Cómo querés recibir o retirar tu compra?</h2>
                    <select className="select-cart" onClick={(e) => handleSelect(e)}>
                        <option>Seleccionar opción</option>
                        <option>Retiro por la tienda</option>
                        <option>Enviar a mi domicilio</option>
                    </select>
                </div>
                <div>
                    {
                        select === "Enviar a mi domicilio"
                        ?  
                <div className="card-send">
                    <div className="img-send-card">
                      <img className="img-send" src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="imagen rota"></img>
                    </div>
                    <div className="cart-slim-information">
                      <div className="name-size">
                        <p>Direccion: { userValidated?.address }</p>
                        <p>CP: { userValidated?.cp } - { userValidated?.province }</p>
                        <p>{ `${(userValidated?.name) + " " +(userValidated?.lastName)}` } - { userValidated?.phone }</p>
                      </div>
                    </div>
                      <div className="cart-edit">
                        <div className="price-discount-slim">
                            <Link to="">
                            <p> Editar campo </p>
                            </Link>
                      </div>
                    </div>
                </div>
                    : null
                    }
                </div>
                    { ProductosParaMostrar && ProductosParaMostrar?.map((product, i) => {
                    return <CardSlim 
                    key= { i }
                    index= { i }
                    image= { product?.image }
                    name= { product?.name }
                    size= { product?.size }
                    color= { product?.color }
                    stock= { product?.stock }
                    id= { product.id }
                    discount= { 0 }
                    price= { product?.price }
                    />
                })}
                </div>
                <div className="resume-count">
                    <div className="cart-container-2">
                        <h3>Resumen de compra</h3>
                        <hr/>
                        <div className="cart-price-send">
                            <h4>Envío gratis</h4>
                            <p>$0</p>
                        </div>
                        <hr/>        
                        <div className="cart-total-products">
                            <h4>TOTAL:</h4>
                            <p>${ total }</p>
                        </div>
                    </div>
                        <Link to="/user/products/pay">
                            <button className="btn-continue-cart" onClick={() => handleContinue()} >Continuar</button>
                        </Link>
                </div>
        </div>
    </div>
                : <p className="title-no-cart">El carrito se encuentra vacío</p>
                
            }    
    </>)
}