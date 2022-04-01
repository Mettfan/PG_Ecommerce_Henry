import ProductCard from "../ProductCard/ProductCard";
import './Catalog.css'
function Catalog(props){
    let productos = props.productos
    return (
        <>
        {productos.map(producto => {
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
      
      ></ProductCard>
      
    })}
        </>
    )
}

export default Catalog