import axios from "axios"

export const  CREATE_ORDER = 'CREATE_ORDER'


export const addOrder =  ( email, payment_id )  => async (dispatch) => {
    axios.post('http://localhost:3001/usuario/order', {email, payment_id}).then( response => {
        
        dispatch({
            type: CREATE_ORDER,
            payload: response.data
        })
    })
}
