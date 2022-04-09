import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getShoppingList} from '../../redux/actions/shoppingCartActions'
export default function ShoppingCart ( ) {

    const {  isAuthenticated, user  } = useAuth0()

    let userValidated = useSelector( state => state.userReducer.status.user )
    let isUserAuthenticated = isAuthenticated || userValidated

    const status = useSelector( state => state )
    const userRed  = status.userReducer
    const shopping = status.shoppingCartReducer
    const dispatch = useDispatch()


    
    useEffect( ( )=> {
        console.log( 'GETTING SHOPPING LIST')


        async function addShoppingCart  (){ 
            let usuario = userValidated || user
            console.log("ASOCIANDO: "+usuario?.email)
            await axios.post('http://localhost:3001/usuario/shopping', { productId: Number(60), userEmail: usuario?.email}).then( response => {
              console.log(response.data)
              dispatch({ type: 'ADD_PRODUCT', payload: response.data })
            },
            (error) => console.log(error))
      
        }
        
        // dispatch(getShoppingList({ email: user.status.user.email }))

        const productosCarrito = axios.get('http://localhost:3001/usuario/shopping', { email: user?.status.user.email }).then( response => {
            console.log(response.data)
            console.log(status.shoppingCartReducer)
            return status.shoppingCartReducer.productos?.msg
        })


        addShoppingCart()
     }, [])
    
     const ProductosParaMostrar = status.shoppingCartReducer.productos?.msg
    // let state = useSelector( state => state.shoppingCartReducer  )
    console.log(ProductosParaMostrar)
    return (<>
    
        <b>HERE IS YOUR SHOPPING CART!</b>
        {JSON.stringify(userRed.status.user.email)}
        {ProductosParaMostrar?.map(producto => 
                <div>
                <p>{producto.name}</p>
                <p>${producto.price}</p>
                <img src={producto.image} alt="producto" width="50px" height="50px" />
            </div>)
        }
        {/* {JSON.stringify(state)}
        {console.log(state)} */}

    
    </>)
}