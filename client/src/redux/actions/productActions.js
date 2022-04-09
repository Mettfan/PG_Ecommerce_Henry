import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ERROR = 'ERROR'
export const ADD_SUBTOTAL = 'ADD_SUBTOTAL'
export const DELETE_SUBTOTAL = 'DELETE_SUBTOTAL'


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
    axios.get('http://localhost:3001/productos/' + id).then( response => {
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


export const createProduct = ( { gender, name, description, size, color, stock, price, image, category} ) => async ( dispatch ) => {

    axios.post('http://localhost:3001/productos', { 
        
        gender,
        name,
        description,
        size,
        color,
        stock,
        price,
        
        image,
        category
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

export const QuantityCart = ( value ) => {
    return function (dispatch){
        dispatch({
            type: ADD_SUBTOTAL,
            payload: [value[0],value[1]]
        })
    }
}

export const deleteSubtotal = ( value ) => {
    console.log('delete', value)
    return function (dispatch){
        dispatch({
            type: DELETE_SUBTOTAL,
            payload: value
        })
    }
}