import Catalog from "../../Product/Catalog/Catalog";
import ProductCard from "../../Product/ProductCard/ProductCard";
export default function SearchDialog (props) {
    
    return (<> 
    
    <div className="search-dialog">
        <div>{props.content.map(prod => <ProductCard id={prod.id}
                name = {prod.name}
                category_name={prod.category_name}
                color={prod.color}
                description={prod.description}
                gender={prod.gender}
                image={prod.image}
                price={prod.price}
                size={prod.size}
                stock={prod.stock}
                key ={ prod.id}></ProductCard>)}</div>

    </div>
    {/* <Catalog productos = {props.content} ></Catalog> */}
    
    
    
        
    
    
    </>)
}