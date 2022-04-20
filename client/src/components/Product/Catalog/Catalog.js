import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import './Catalog.css'
function Catalog(props){
    let productos = props.productos
    let prods = useSelector(state => state.productReducer.productos)
    console.log(prods, 'prods')
    const prodsAvaliable = productos.filter(product => product.disabled == false)
    return (
        <>
            <div className="catalog-container">
            {
            prodsAvaliable.length !== 0 ?
            prodsAvaliable?.map(producto => {
                return <ProductCard 
                id={producto.id}
                name = {producto.name}
                category_name={producto.category_name}
                color={producto.color}
                description={producto.description}
                gender={producto.gender}
                image={producto.image}
                price={producto.price}
                size={producto.size}
                stock={producto.stock}
                key={producto.id}
                ></ProductCard>
      
    })

            :
            <h1> No hay productos en esta sección </h1>
}
        
        </div>
        </>
    )
}

export default Catalog