import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { createProduct } from "../../../../redux/actions/productActions"
import ProductDetail from "../../../ProductDetail/ProductDetail"
import './CreateProduct.css'
export default function CreateProduct (props) {
    let goTo = useNavigate()
    let [state, setState] = useState({
        product: {
            name: '',
            description: '',
            category: '',
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
            size: state.product.size.join('-'),
            color: state.product.color,
            gender: state.product.gender,
            stock: Number(state.product.stock),
            price: Number(state.product.price),
            image: state.product.image,
            category: state.product.category
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

    return (<div className="create-product-form">
        
        {console.log('HERE YOU CAN CREATE PRODUCTS')}

        <div>HERE YOU CAN CREATE PRODUCTS</div>

        <form onSubmit={ (e) => onSubmit(e) }>
            
                <label>Nombre</label>
            <div className="product-name-input">
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'name' placeholder="Ingrese el nombre del Producto..."></input>
            </div>

                <label>Descripción</label>
            <div className="product-description-input">
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'description' placeholder="Ingrese la descripción del Producto..."></input>
            </div>
            
            <label>Category</label>
            <div className="product-category-input"> 

                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'category' placeholder="Ingrese la Categoria del Producto..."></input>

            </div>

            <label>Talla</label>
            <div className="product-size-input">
                <select name="select-size" onChange={ (e) => selectSizeOnChange(e)}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                {state.product.size.join('-')}
            </div>

                <label>Color</label>
            <div className="product-color-input">
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'color' placeholder="Ingrese el Color del Producto..."></input>
            </div>

            <label>Genero</label>
            <div className="product-gender-input">
            <select name="select-gender" onChange={ (e) => selectGenderOnChange(e)}>
                    <option value="Dama">Dama</option>
                    <option value="Caballero">Caballero</option>
                    <option value="Niño">Niño</option>
                </select>
            </div>

                <label>Stock</label>
            <div className="product-stock-input">
                <input onChange= {( e ) => handleInputOnChange(e)} type='number' name = 'stock' placeholder="Ingrese el Stock del Producto..."></input>
            </div>
                <label>Precio</label>
            <div className="product-price-input">
                <input onChange= {( e ) => handleInputOnChange(e)} type='number' name = 'price' placeholder="Ingrese el Precio del Producto..."></input>
            </div>
                <label>URL de imagen</label>
            <div className="product-image-input">
                <input onChange= {( e ) => handleInputOnChange(e)} type='text' name = 'image' placeholder="Ingrese el nombre del Producto..."></input>
            </div>


            <button type="submit">CREAR PRODUCTO</button>
        </form>
        <Link className="admin-goto-products" to={'/admin/products'}>ADMIN PRODUCTS</Link>
        {/* <ProductDetail producto = {{
            name: state.product.name,
            description: state.product.description,
            size: state.product.size.join('-'),
            color: state.product.color,
            gender: state.product.gender,
            stock: Number(state.product.stock),
            price: Number(state.product.price),
            image: state.product.image
        }} ></ProductDetail> */}
    </div>)
}