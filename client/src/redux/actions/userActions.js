import axios from 'axios'
import Cookies from 'universal-cookie'
export const GET_USERS = 'GET_USERS'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const LOGIN = 'LOGIN'
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


export const createUser = ({ name, lastName, picture, gender, born, dni, email, address, province, phone, password, permission = 'user' }) => async (dispatch) => {
    let cookie = new Cookies()
    axios.post('http://localhost:3001/usuario/crearusuario', { 
        
        name,
        lastName,
        picture,
        gender,
        born,
        dni,
        email,
        address,
        province,
        phone,
        password,
        permission
     }).then( response => {
        cookie.set('user', response.data)
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

export const login  = ({ email, password}) => async (dispatch) => {
    let cookie  = new Cookies()
    
    axios.post('http://localhost:3001/usuario/login',{
        email,
        password,
    }).then( response => {
        cookie.set('user', response.data)
        dispatch({
            type: LOGIN,
            payload: response.data
        })
    },
    (error) => {
        dispatch({
            type: ERROR,
            payload: error.error
        })
    }
    )
}
export const updateUser=({email,address,phone,province,postal,name,lastName})=>async(dispatch)=>{
    axios.put('http://localhost:3001/usuario/actualizarusuario',{
        email,
        address,
        phone,
        province,
        postal,
        name,
        lastName
    }).then( response => {
        dispatch({
            type: UPDATE_USER,
            payload: response.data
        })
    },
    (error) => {
        dispatch({
            type: ERROR,
            payload: error.error
        })
    }
    )
}


