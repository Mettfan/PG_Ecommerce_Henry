import { Link } from 'react-router-dom'
import './ProductCard.css'
function ProductCard(props){
    let {id, name, category_name, color, description, gender, image, price, size, stock} = props
    return(
    


        <div className="wrapper">
        <div className="card">
            <img alt="" src={image} className="card-image"/>
            <div className="card-container">
            
            </div>
            <div className="info">
                <h1>{name}</h1>
                    <p>${price} </p>
                <Link to={`/productos/${id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <button>Ver más</button>
                </Link>
            </div>
        </div>
    </div>
        
    
    )
}


export default ProductCard
