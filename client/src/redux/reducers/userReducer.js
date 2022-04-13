
import  { GET_USERS, CREATE_USER, ERROR, LOGIN, UPDATE_USER } from '../actions/userActions'
const initialState = {
    usuarios: [],
    status: '',
    usuario: {},
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
        case UPDATE_USER:
            return { ...state, usuario: action.payload}    
        default: 
            return { ...state }
        
    }
}
export default userReducer