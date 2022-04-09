import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ERROR = 'ERROR'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_BY_NAME = 'FILTER_BY_NAME'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'



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


/*******  FILTROS *************/

export function filterByGenre (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_GENRE,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}


export function FilterByName(payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_NAME,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
}

export function FilterByCategory(payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_CATEGORY,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
}