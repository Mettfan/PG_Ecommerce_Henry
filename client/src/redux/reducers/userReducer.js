
import  { GET_USERS, CREATE_USER, ERROR, LOGIN } from '../actions/userActions'
const initialState = {
    usuarios: [],
    status: ''
}
function userReducer( state = initialState, action ){
    switch (action.type){

        case GET_USERS: 
            return { ...state, usuarios: action.payload }
        case CREATE_USER: 
            return { ...state, status: action.payload }

        case LOGIN:
            return { ...state, status: action.payload}
        case ERROR: 
            return { ...state, status: action.payload}
        default: 
            return { ...state }
        
    }
}
export default userReducer