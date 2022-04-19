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

    //let {  isAuthenticated, user  } = useAuth0()
    let cookie = new Cookies()
    // let userValidated = useSelector( state => state.userReducer.status.user )
    let userValidated = cookie.get('user').user
    //let isUserAuthenticated = isAuthenticated || userValidated
    let nav = useNavigate()
    const status = useSelector( state => state )
    const userRed  = status.userReducer
    const shopping = status.shoppingCartReducer
    console.log(shopping, 'SHOPPINNNGNGNGNGNGNGNGN')
    const dispatch = useDispatch()


    // const dispatch = useDispatch();
    const [select, setSelect] = useState("Retiro por la tienda");
    const [count, setCount] = useState(3);
    const subtotal = useSelector((state) => state.productReducer.totalCart );
    // const status = useSelector((state) => state.productReducer.status);
    console.log('subtotal reducer in shoppingCart', subtotal)

    const subtotalCards = subtotal?.map((card) => card.subtotal)
    const total = subtotalCards?.reduce((a,b) => a + b) || cookie.get('total');
    // const total = subtotalCards?.reduce((a,b) => a + b).toFixed(2);
    // useEffect(() => {
    // console.log('subtotal', subtotal)
    // console.log('total useEffect', total)
    //     // dispatch(pruebaAction())
    // })
// {quantity:2, price: 69.00, name: "Zapatillas nike", size:"", color:"" img:""}
    const handleSelect = (e) => {
        console.log('e.target.value', e.target.value)
            setSelect(e.target.value);
     }
 
     const handleContinue = () => {
         console.log('CONTINUAR')
         setCount(0);
     }

    
    useEffect( ( )=> {
        console.log( 'GETTING SHOPPING LIST')


        async function addShoppingCart  (){ 
            let usuario = userValidated; //|| user
            console.log("ASOCIANDO: "+usuario?.email)
            await axios.post('http://localhost:3001/usuario/shopping', { productId: Number(3000), userEmail: usuario?.email}).then( response => {
              console.log(response.data)
              cookie.set('shopping', response.data)
              dispatch({ type: 'ADD_PRODUCT', payload: response.data })
            },
            (error) => console.log(error))
      
        }
        
        // dispatch(getShoppingList({ email: user.status.user.email }))

        const productosCarrito = axios.get('http://localhost:3001/usuario/shopping', { email: userValidated?.email }).then(response => {
            console.log(response.data)
            console.log(status.shoppingCartReducer)
            return status.shoppingCartReducer.productos?.msg
        })


        addShoppingCart()
     }, [])
    
     const ProductosParaMostrar = status.shoppingCartReducer.productos?.msg || cookie.get('shopping')?.msg
    // let state = useSelector( state => state.shoppingCartReducer  )
    console.log(ProductosParaMostrar)
    
   
        // useEffect(() => {
        // console.log('subtotal', subtotal)
        // console.log('total useEffect', total)
        //     // dispatch(pruebaAction())
        // })
    let setShoppingTotal = ( ) => {
        console.log(total)
        cookie.set('total', subtotalCards?.reduce((a,b) => a + b))
        nav("/user/products/pay")
    }
    return (<>
    
        {/* <b>HERE IS YOUR SHOPPING CART!</b>
        {JSON.stringify(userRed.status.user.email)}
        {ProductosParaMostrar?.map(producto => 
                <div>
                <p>{producto.name}</p>
                <p>${producto.price}</p>
                <img src={producto.image} alt="producto" width="50px" height="50px" />
            </div>)
        } */}



{/* Carrito Maxi */}
        
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
                        <p>Direccion: { userValidated?.address }</p>
                        <p>CP: { userValidated?.postal } - { userValidated?.province }</p>
                        <p>{ `${(userValidated?.name) + " " +(userValidated?.lastName)}` } - { userValidated?.phone }</p>
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
                    { ProductosParaMostrar?.map((product, i) => {
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
                        <button onClick={() => setShoppingTotal() }>
                            <button className="btn-continue-cart" onClick={() => handleContinue()} >Continuar</button>
                        </button>
                </div>
        </div>
    </div>
    
                
            }
       

        {/* {JSON.stringify(state)}
        {console.log(state)} */}

    
    </>)
}