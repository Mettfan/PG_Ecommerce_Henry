
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../../redux/actions/productActions'
export default function DeleteProduct(){
    let dispatch = useDispatch()
    let [state, setState] = useState({
        id: ''
    })
    let handleOnChange = ( e ) => {
        setState({
            id: e.target.value
        })
        console.log(e.target.value)
    }
    let handldeOnSubmit = ( e )=> {
        e.preventDefault()
        console.log('SUBMITED ID!')
        dispatch(deleteProduct(Number(state.id)))
    }
    return (<div onSubmit={ (e) => handldeOnSubmit(e)}>
        HERE YOU CAN DELETE PRODUCTS
        <form>
            <input type = 'text' placeholder = 'ID' onChange = { (e) => handleOnChange(e)} ></input>
        </form>
    </div>)
}