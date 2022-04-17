
const data = require( '../productsList' );


const getInfo= ()=>{
        //  console.log('hola')
         var id_generated = 0
    const apiInfo= data?.map(el=>{
        
        return {
            // id:++id_generated,
            name:el.name,
            gender:el.gender,
            description:el.description,
            size:el.size,
            color:el.color,
            stock:el.stock,
            stock_by_size: el.stock_by_size,
            price:el.price,
            discount:el.discount,
            warranty:el.warranty,
            brand:el.brand,
            suitable_for:el.suitable_for,
            composition:el.composition,
            origin:el.origin,
            important_data:el.important_data,
            extras:el.extras,   
            category_name:el.category,
            image:el.image,
            disabled: el.disabled
           
        }
           
     })
    
    return apiInfo;
}



module.exports=getInfo