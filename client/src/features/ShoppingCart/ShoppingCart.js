import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getShoppingList} from '../../redux/actions/shoppingCartActions'
export default function ShoppingCart ( ) {
    const status = useSelector( state => state )
    const user  = status.userReducer
    const shopping = status.shoppingCartReducer
    const dispatch = useDispatch()

    useEffect( ( )=> {
        console.log( 'GETTING SHOPPING LIST')

        
        // dispatch(getShoppingList({ email: user.status.user.email }))

        const productosCarrito = axios.get('http://localhost:3001/usuario/shopping', { email: user.status.user.email }).then( response => {
            console.log(response.data)
            console.log(status.shoppingCartReducer)
        })


        return productosCarrito
     }, [])
    
     const ProductosParaMostrar = status.shoppingCartReducer.productos.msg
    // let state = useSelector( state => state.shoppingCartReducer  )
    console.log(ProductosParaMostrar)
    return (<>
    
        <b>HERE IS YOUR SHOPPING CART!</b>
        {JSON.stringify(user.status.user.email)}
        {ProductosParaMostrar.map(producto => 
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