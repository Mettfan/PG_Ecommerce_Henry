
import { CREATE_ORDER } from "../actions/orderActions"
const initialState = {
    order: ''
}
function orderReducer( state = initialState, action ){
    switch (action.type){

        case CREATE_ORDER: 
            return { ...state, order: action.payload }
        default: 
        return { ...state }
       
        
    }
}
export default orderReducer