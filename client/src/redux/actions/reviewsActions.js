import axios from 'axios'
import Cookies from 'universal-cookie'

export const ADD_REVIEW = 'ADD_REVIEW'
export const GET_REVIEWS = 'GET_REVIEWS'
// export const GET_PRODUCT = 'GET_PRODUCT'
// export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const ERROR = 'ERROR'


export const getReviews = ( ) => async dispatch  => {
    axios.get('http://localhost:3001/usuario/reviews').then( response => {
        dispatch({
            type: GET_REVIEWS,
            payload: response.data,
        })
    },
    (error) => {
        dispatch({
            type: ERROR,
            payload: error.error,
        })
    })
}


export const addReview = ( {productId, email} ) => async dispatch  => {
    let cookie = new Cookies()
    await axios.post('http://localhost:3001/usuario/review', {
        productId,
        email
    }).then( response => {
        cookie.set('review add', response.data)
        dispatch({
            type: ADD_REVIEW,
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