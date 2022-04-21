import axios from 'axios'
import { useSelector } from 'react-redux'
import Cookie from 'universal-cookie'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const GET_SHOPPING = 'GET_SHOPPING'
// export const GET_PRODUCT = 'GET_PRODUCT'
// export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ERROR = 'ERROR'

//export const DELETE_FROM_SHOPPING = 'DELETE_FROM_SHOPPING'


export const addProduct = ( {productId, userEmail} ) => async dispatch  => {
    await axios.post('http://localhost:3001/usuario/shopping', {
        productId,
        userEmail
    }).then( response => {
       
        dispatch({
            type: ADD_PRODUCT,
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

export const getShoppingList = ( { email } ) => async dispatch => {
    console.log(email, 'emaillll ')
    await axios.get(`http://localhost:3001/usuario/shopping/${email}`).then( response => {
        console.log(response.data, 'dataaaaaaaaaaaaaaaaa ')
        dispatch({
            type: GET_SHOPPING,
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




//HACER LO MISMO PARA LAS SIGUIENTES LINEAS
// export const getProduct = ( id ) => async ( dispatch ) => {
//     axios.get('http://localhost:3001/productos/' + id).then( response => {
//         dispatch({
//             type: GET_PRODUCT,
//             payload: response.data
//         })
//     },
//     (error) => {
//         dispatch({
//             type: ERROR,
//             payload: error.error
//         })
//     })
// }


// export const createProduct = ( { gender, name, description, size, color, stock, price, image, category} ) => async ( dispatch ) => {

//     axios.post('http://localhost:3001/productos', { 
        
//         gender,
//         name,
//         description,
//         size,
//         color,
//         stock,
//         price,
        
//         image,
//         category
//      }).then( response => {
//          dispatch({
//              type: CREATE_PRODUCT,
//              payload: response.data
//          })
//      } ) 
// }

export const deleteProductFromCart = ( {productId, email} ) => async ( dispatch ) => {
    await axios.delete(`http://localhost:3001/usuario/shopping?email=${email}&productId=${productId}`).then( response => {
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

//export function DeleteProductFromShopping(id) {
//    return async function (dispatch) {
//        try {
//            dispatch ({
//                type: DELETE_FROM_SHOPPING,
//                payload: id,
//            });
//        }
//        catch (error) {
//            console.log(error)
//        }    
//    }
//}