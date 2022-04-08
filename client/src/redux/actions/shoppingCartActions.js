import axios from 'axios'
export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const GET_PRODUCT = 'GET_PRODUCT'
// export const CREATE_PRODUCT = 'CREATE_PRODUCT'
// export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ERROR = 'ERROR'

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

// export const deleteProduct = ( id ) => async ( dispatch ) => {
//     axios.delete('http://localhost:3001/producto/'+id).then( response => {
//         dispatch({
//             type: DELETE_PRODUCT,
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