
import  { ADD_PRODUCT, GET_SHOOPPING, ERROR } from '../actions/shoppingCartActions'
const initialState = {
    shoppingList: [],
    producto: [],
    status: ''
}
function shoppingCartReducer( state = initialState, action ){
    switch (action.type){

        case ADD_PRODUCT: 
            return { ...state, productos: action.payload }
        case GET_SHOOPPING:
            return { ...state, shoppingList: action.payload  }
        // case CREATE_PRODUCT: 
        //     return { ...state, status: action.payload }
        // case DELETE_PRODUCT:
        //     return { ...state, status: action.payload }
        case ERROR: 
            return { ...state, status: action.payload}
        default: 
            return { ...state }
        
    }
}
export default shoppingCartReducer