import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function ( ) {
    useEffect( ( )=> {
        console.log( 'GETTING SHOPPING LIST')
     }, [])
    

    let state = useSelector( state => state.shoppingCartReducer  )
    return (<>
    
        <b>HERE IS YOUR SHOPPING CART!</b>
        {/* {JSON.stringify(state)}
        {console.log(state)} */}

    
    </>)
}