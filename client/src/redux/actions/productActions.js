import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ERROR = 'ERROR'

export const getProducts = ( ) => async dispatch  => {
    axios.get('http://localhost:3001/productos').then( response => {
        dispatch({
            type: GET_PRODUCTS,
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

export const getProduct = ( id ) => async ( dispatch ) => {
    axios.get('http://localhost:3001/producto/' + id).then( response => {
        dispatch({
            type: GET_PRODUCT,
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

export const createProduct = ( {id, gender, name, description, size, color, stock, price, category_name, image} ) => async ( dispatch ) => {
    axios.post('http://localhost:3001/productos', { 
        id,
        gender,
        name,
        description,
        size,
        color,
        stock,
        price,
        category_name,
        image
     }).then( response => {
         dispatch({
             type: CREATE_PRODUCT,
             payload: response.data
         })
     } ) 
}

export const deleteProduct = ( id ) => async ( dispatch ) => {
    axios.delete('http://localhost:3001/producto/'+id).then( response => {
        dispatch({
            type: DELETE_PRODUCT,
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