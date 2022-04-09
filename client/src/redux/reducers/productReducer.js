
import  { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, ERROR, ADD_SUBTOTAL, DELETE_SUBTOTAL } from '../actions/productActions'
const initialState = {
    productos: [],
    producto: [],
    status: '',
    totalCart: [0],   
}
function productReducer( state = initialState, action ){
    console.log('action.payload reducer', action.payload)
    switch (action.type){
        case GET_PRODUCTS: 
            return { ...state, productos: action.payload }
        case GET_PRODUCT:
            return { ...state, producto: action.payload  }
        case CREATE_PRODUCT: 
            return { ...state, status: action.payload }
        case DELETE_PRODUCT:
            return { ...state, status: action.payload }
        case ERROR: 
            return { ...state, status: action.payload}
        case ADD_SUBTOTAL: 
            const total = [...state.totalCart]
            total.splice(action.payload[0],1,action.payload[1])
            return { ...state, totalCart : total}
        case DELETE_SUBTOTAL:
            const totalDelete = [...state.totalCart]
            const filterSubtotal = totalDelete.filter((subtotal) => subtotal !== action.payload)
            return { ...state, totalCart: filterSubtotal }
        default: 
            return { ...state }
        
    }
}
export default productReducer

