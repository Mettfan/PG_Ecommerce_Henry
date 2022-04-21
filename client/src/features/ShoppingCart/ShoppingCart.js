//import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getShoppingList} from '../../redux/actions/shoppingCartActions'
import CardSlim from "../../components/CardSlim/CardSlim"
import { Link, useNavigate } from "react-router-dom"
import './ShoppingCart.css'
import Cookies from "universal-cookie"


export default function ShoppingCart ( ) {

    let cookie = new Cookies()
    const user = cookie.get('user')
    let nav = useNavigate()
    const status = useSelector( state => state )
    const userRed  = status.userReducer
    const shopping = status.shoppingCartReducer
    const dispatch = useDispatch()



    const [select, setSelect] = useState("Retiro por la tienda");
    const [count, setCount] = useState(3);
    const subtotal = useSelector((state) => state.productReducer.totalCart );


    const subtotalCards = subtotal?.map((card) => card.subtotal)
    const total = subtotalCards?.reduce((a,b) => a + b) || cookie.get('total');

    const handleSelect = (e) => {
        setSelect(e.target.value);
     }
 
    const handleContinue = () => {
         setCount(0);
     }

    
    useEffect(() => {

        async function addShoppingCart  (){ 
            await axios.post('http://localhost:3001/usuario/shopping', { productId: Number(3000), userEmail: user?.email }).then(response => {
              cookie.set('shopping', response.data)
              dispatch({ type: 'ADD_PRODUCT', payload: response.data })
            },
            (error) => console.log(error))
      
        }

        const productosCarrito = axios.get('http://localhost:3001/usuario/shopping', { email: user?.email }).then(response => {
            return status.shoppingCartReducer.productos?.msg
        })


        addShoppingCart()
     }, [])
    
    const ProductosParaMostrar = status.shoppingCartReducer.productos?.msg || cookie.get('shopping')?.msg

    let setShoppingTotal = () => {
        cookie.set('total', subtotalCards?.reduce((a,b) => a + b))
        nav("/user/products/pay")
    }
    return (<>
            {
                ProductosParaMostrar &&
                
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
                       select === "Enviar a mi domicilio"?
                          
                <div className="card-send">
                    <div className="img-send-card">
                      <img className="img-send" src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="imagen rota"></img>
                    </div>
                    <div className="cart-slim-information">
                      <div className="name-size">
                                                    <p>Direccion: {user?.address}</p>
                                                    <p>CP: {user?.postal} - {user?.province}</p>
                                                    <p>{`${(user?.name) + " " + (user?.lastName)}`} - {user?.phone}</p>
                      </div>
                    </div>
                      <div className="cart-edit">
                        <div className="price-discount-slim">
                            <Link to="/user/products/send">
                            <p> Editar campo </p>
                            </Link>
                      </div>
                    </div>
                </div>
                       :null
                      
                    }
                </div>
                    { ProductosParaMostrar.map && ProductosParaMostrar?.map((product, i) => {
                    return <CardSlim 
                    key= { i }
                    index= { i }
                    image= { product?.image }
                    name= { product?.name }
                    size= { product?.size }
                    color= { product?.color }
                    stock= { product?.stock }
                    discount= { Number(product?.discount) || 0 }
                    price= { product?.price }
                    id= { product?.id }
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
                            <p>${ (Number(cookie.get('total')) || total) }</p>
                        </div>
                    </div>
                        <form className="form-mp" action='http://localhost:3001/productos/checkout' method='POST'>
                            <input type='hidden' name='productList' value={JSON.stringify(cookie.get('shopping')?.msg)}></input>
                            <input type='hidden' name='userEmail' value={cookie.get('user').email}></input>
                            <input type='hidden' name='total' value={100} ></input>
                            <button className='mpButton' type='submit' ><b>Pagar</b><img className='mpImage' src='https://www.lentesplus.com/media/wysiwyg/landings/metodos-de-pago/ico_mercadoPago.png' alt= ''></img> </button>
                        </form>
                </div>
        </div>
            </div>}
    </>)
}