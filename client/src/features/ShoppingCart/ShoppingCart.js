import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getShoppingList} from '../../redux/actions/shoppingCartActions'
export default function ( ) {
    const status = useSelector( state => state )
    const user  = status.userReducer
    const shopping = status.shoppingCartReducer
    const dispatch = useDispatch()

    useEffect( ( )=> {
        console.log( 'GETTING SHOPPING LIST')

        
        // dispatch(getShoppingList({ email: user.status.user.email }))

        axios.get('http://localhost:3001/usuario/shopping', { email: user.status.user.email }).then( response => {
            console.log(response.data)
        })



     }, [])
    

    // let state = useSelector( state => state.shoppingCartReducer  )
    return (<>
    
        <b>HERE IS YOUR SHOPPING CART!</b>
        {JSON.stringify(user.status.user.email)}
        {JSON.stringify(status.shoppingCartReducer)}
        {/* {JSON.stringify(state)}
        {console.log(state)} */}

    
    </>)
}