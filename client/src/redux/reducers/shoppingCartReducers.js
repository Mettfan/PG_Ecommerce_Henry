
import  { ADD_PRODUCT, GET_SHOPPING, ERROR,DELETE_PRODUCT,DELETE_ALL_PRODUCTS_SHOPPING_CART } from '../actions/shoppingCartActions'
const initialState = {
    shoppingList: [],
    productos: [],
    status: ''
}
function shoppingCartReducer( state = initialState, action ){
    switch (action.type){

        case ADD_PRODUCT: 
            return { ...state, productos: action.payload, shoppingList: action.payload, status: 'success' }
        case GET_SHOPPING:
            return { ...state, shoppingList: action.payload, productos: action.payload  }
        // case CREATE_PRODUCT: 
        //     return { ...state, status: action.payload }
         case DELETE_PRODUCT:
            return { ...state, productos: action.payload, shoppingList: action.payload, status: 'delete success' }
         case DELETE_ALL_PRODUCTS_SHOPPING_CART:
            return { ...state, productos: action.payload, shoppingList: action.payload, status: 'delete success' }
        case ERROR: 
            return { ...state, status: action.payload}
        default: 
            return { ...state }
        
    }
}
export default shoppingCartReducer