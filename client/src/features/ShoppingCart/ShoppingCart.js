import { useSelector } from "react-redux"

export default function ( ) {
    

    let state = useSelector( state => state.shoppingCartReducer  )
    return (<>
    
        <b>HERE IS YOUR SHOPPING CART!</b>
        {JSON.stringify(state)}
        {console.log(state)}

    
    </>)
}