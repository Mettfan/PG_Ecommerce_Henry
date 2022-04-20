import axios from 'axios'
import Cookies from 'universal-cookie'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const EDIT_PRODUCT = 'EDIT_PRODUCT'

export const DELETE_PRODUCT_ID = 'DELETE_PRODUCT_ID'

export const ERROR = 'ERROR'
//export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_BY_NAME = 'FILTER_BY_NAME'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const ADD_SUBTOTAL = 'ADD_SUBTOTAL'
export const DELETE_SUBTOTAL = 'DELETE_SUBTOTAL'
export const FILTER_BY_MEN = 'FILTER_BY_MEN'
export const FILTER_BY_WOMEN = 'FILTER_BY_WOMEN'
export const FILTER_BY_UNISEX = 'FILTER_BY_UNISEX'
export const FILTER_BY_NINO = 'FILTER_BY_NINO'
export const FILTER_BY_NINA = 'FILTER_BY_NINA'
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND'
export const CLEAN_PRODUCT = 'CLEAN_PRODUCT'






export const getProducts = ( ) => async dispatch  => {
    let cookie = new Cookies()
    axios.get('http://localhost:3001/productos').then( response => {
        cookie.set('product', response.data)
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


export function cleanProduct (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: CLEAN_PRODUCT,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
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


export const createProduct = ( { name, description, size, color, gender, stock, stock_by_size, price, discount, warranty, brand, suitable_for, composition, origin, important_data, extras, image, category} ) => async ( dispatch ) => {

    axios.post('http://localhost:3001/productos', { 
        name, 
        description,
        size,
        color,
        gender,
        stock,
        stock_by_size,
        price,
        discount,
        warranty,
        brand,
        suitable_for,
        composition,
        origin,
        important_data,
        extras,
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
    axios.delete(`http://localhost:3001/productos/${id}`).then( response => {
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


export const editProduct = ( producto ) => async ( dispatch ) => {
    console.log('producto action edit', producto)
    await axios.put("http://localhost:3001/productos/putproduct", producto)
    .then(response => {
        console.log('response.data action edit', response.data)
        dispatch({
            type: EDIT_PRODUCT,
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


export const deleteProductAction = () => {
    return function (dispatch){
        dispatch({ 
            type: DELETE_PRODUCT_ID,
            payload: null
        })
    }
}


/*******  FILTROS *************/

export function filterByGenreMen (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_MEN,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}
export function filterByGenreWomen (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_WOMEN,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}

export function filterByGenreUnisex (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_UNISEX,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}
export function filterByGenreNiña (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_NINA,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}
export function filterByGenreNiño (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_NINO,
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

export function FilterByPrice(payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_PRICE,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
}

export function FilterByBrand(payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_BRAND,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
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