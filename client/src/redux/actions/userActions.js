import axios from 'axios'
export const GET_USERS = 'GET_USERS'
export const CREATE_USER = 'CREATE_USER'
// export const EDIT_USER = 'EDIT_USER'
export const ERROR = 'ERROR'

export const getUsers = ( ) => async dispatch  => {
    axios.get('http://localhost:3001/usuario').then( response => {
        dispatch({
            type: GET_USERS,
            payload: response.data
        })
    },
    (error) => {
        dispatch({
            type: ERROR,
            payload: error.error
        })
    })
}


export const createUser = ( {name, lastName, gender, born, dni, email, address, province, phone, password} ) => async ( dispatch ) => {
    axios.post('http://localhost:3001/usuario/crearusuario', { 
        
        name,
        lastName,
        gender,
        born,
        dni,
        email,
        address,
        province,
        phone,
        password,
        permission: "user"
     }).then( response => {
         dispatch({
             type: CREATE_USER,
             payload: response.data
         })
     },
     (error) => {
         dispatch({
             type: ERROR,
             payload: error.error
         })
     } ) 
}


