import  { ADD_PRODUCT_FAVORITE, GET_FAVORITE, DELETE_PRODUCT_FAVORITE, ERROR } from '../actions/favoriteActions'
const initialState = {
    favoritesList: [],
    productos: [],
    status: ''
}
function shoppingCartReducer( state = initialState, action ){
    switch (action.type){

        case ADD_PRODUCT_FAVORITE: 
            return { ...state, status: action.payload }
        case GET_FAVORITE:
            return { ...state, favoritesList: action.payload  }
        case DELETE_PRODUCT_FAVORITE:
            return { ...state, favoritesList: action.payload }
          //ver este status
        case ERROR: 
            return { ...state, status: action.payload}
        default: 
            return { ...state }
        
    }
}
export default shoppingCartReducer