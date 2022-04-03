import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createProduct } from "../../../../redux/actions/productActions"

export default function CreateProduct (props) {
    let goTo = useNavigate()
    let [state, setState] = useState({
        product: {
            name: '',
            description: '',
            size: [],
            color: '',
            gender: '',
            stock: 0,
            price: 0,
            image: ''
        }
    })
    let dispatch = useDispatch()
    let productos = useSelector((state) => state.productReducer.productos )
    let onSubmit = (e) =>{
        e.preventDefault()

        console.log('Product Submited')
        console.log(state.product)

        dispatch(createProduct({
            name: state.product.name,
            description: state.product.description,
            size: state.product.size,
            color: state.product.color,
            gender: state.product.gender,
            stock: Number(state.product.stock),
            price: Number(state.product.price),
            image: state.product.image
        }))
        goTo('../admin/products')



    }

    let handleInputOnChange = ( e ) => {
        setState({
            ...state, 
            product: { ...state.product, [e.target.name]: e.target.value} 
        })
        console.log(state.product)
    } 

    let selectSizeOnChange = ( e ) => {

        setState({
            ...state,
            product: {...state.product, size:  !state.product.size?.includes(e.target.value) ? state.product.size?.concat(e.target.value) : state.product.size?.filter( size => size !== e.target.value) }
        })
        
        console.log(state.product.size)
    }
    let selectGenderOnChange = ( e ) => {
        setState({
            ...state,
            product: { ...state.product, gender: e.target.value},
        })
        console.log(state.product.gender)
    }

    return (<div>
        
        {console.log('HERE YOU CAN CREATE PRODUCTS')}

        <div>HERE YOU CAN CREATE PRODUCTS</div>

        <form onSubmit={ (e) => onSubmit(e) }>
            
            <div className="product-name-input">
                <label>Nombre del Producto</label>
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'name' placeholder="Ingrese el nombre del Producto..."></input>
            </div>

            <div className="product-description-input">
                <label>Descripción del Producto</label>
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'description' placeholder="Ingrese la descripción del Producto..."></input>
            </div>

            <div className="product-size-input">

            <label>Talla del Producto</label>
                <select name="select-size" onChange={ (e) => selectSizeOnChange(e)}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>

            <div className="product-color-input">
                <label>Color del Producto</label>
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'color' placeholder="Ingrese el Color del Producto..."></input>
            </div>

            <div className="product-gender-input">
            <label>Genero del Producto</label>
            <select name="select-gender" onChange={ (e) => selectGenderOnChange(e)}>
                    <option value="Dama">Dama</option>
                    <option value="Caballero">Caballero</option>
                    <option value="Niño">Niño</option>
                </select>
            </div>

            <div className="product-stock-input">
                <label>Stock del Producto</label>
                <input onChange= {( e ) => handleInputOnChange(e)} type='number' name = 'stock' placeholder="Ingrese el Stock del Producto..."></input>
            </div>
            <div className="product-price-input">
                <label>Precio del Producto</label>
                <input onChange= {( e ) => handleInputOnChange(e)} type='number' name = 'price' placeholder="Ingrese el Precio del Producto..."></input>
            </div>
            <div className="product-image-input">
                <label>URL de imagen del Producto</label>
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'image' placeholder="Ingrese el nombre del Producto..."></input>
            </div>


            <button type="submit">CREAR PRODUCTO</button>
        </form>

    </div>)
}