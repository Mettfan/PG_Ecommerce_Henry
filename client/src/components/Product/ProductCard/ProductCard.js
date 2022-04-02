import './ProductCard.css'
function ProductCard(props){
    let {id, name, category_name, color, description, gender, image, price, size, stock} = props
    return(<>

        {/* {console.log(props)} */}
        <div className='card-home'>

            <div>
                {name}
            </div>
            <img className="product-card-img" src={image} alt=''></img>

        </div>
        
    
    </>)
}


export default ProductCard
