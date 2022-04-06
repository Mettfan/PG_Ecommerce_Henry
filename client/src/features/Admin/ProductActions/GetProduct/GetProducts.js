import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createProduct, getProducts } from "../../../../redux/actions/productActions"
import { Link } from "react-router-dom"
import './GetProducts.css'

export default function GetProduct (props) {
    let productos = useSelector( (state) => state.productReducer.productos )
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[])
  

    return (<div>
        { productos.map( producto => <div className="admin-panel-product-catalog" >
        
        <div className="admin-panel-product">
            <div>
            {producto.stock+"pz"}
            </div>
            <div>

            {producto.name}
            </div>
            <div>
            {"$"+producto.price}

            </div>
            <img className="admin-panel-product-img" src={producto.image}></img>
            
        </div>

        
        <Link className="admin-panel-product-button-add" to= '/admin/product/create'><b>+</b></Link>
        <Link className="admin-panel-product-button-goto-home" to= '/home'><b>Home</b></Link>
        </div>) }
        
        <div>PRODUCTS SHOULD BE OVER HERE</div>
    </div>)
}