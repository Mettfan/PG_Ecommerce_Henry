import axios from 'axios'
import Cookies from 'universal-cookie'

export const ADD_PRODUCT_FAVORITE = 'ADD_PRODUCT_FAVORITE'
export const GET_FAVORITE = 'GET_FAVORITE'
export const DELETE_PRODUCT_FAVORITE = 'DELETE_PRODUCT_FAVORITE'
export const ERROR = 'ERROR'

export const addProductFavorite = ( {productId, email} ) => async dispatch  => {
    console.log('productId, userEmail', productId, email)
      await axios.post('http://localhost:3001/usuario/favorites', {
          productId,
          email
      }).then( response => {
        console.log('response.data action fav', response.data)
          dispatch({
              type: ADD_PRODUCT_FAVORITE,
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


  export const getFavorites = ( email ) => async dispatch => {
      let cookie = new Cookies()
    console.log('getFavoritesAction email', email)
      await axios.get(`http://localhost:3001/usuario/favorites/${email}`).then( response => { console.log('response.data getFavAct', response.data)
            cookie.set('favorites', response.data.products)
          dispatch({
              type: GET_FAVORITE,
              payload: response.data.products
          })
      },
      (error) => {
          dispatch({
              type: ERROR,
              payload: error.error
          })
      })
  }
  
  export const deleteProductFavorite = ( {productId, email} ) => async ( dispatch ) => {
      axios.delete(`http://localhost:3001/usuario/favorites/${email}/${productId}`).then( response => {
        console.log('response delete fav', response.data)
          dispatch({
              type: DELETE_PRODUCT_FAVORITE,
              payload: response.data.favorite
          })
      },
      (error) => {
          dispatch({
              type: ERROR,
              payload: error.error
          })
      })
  }