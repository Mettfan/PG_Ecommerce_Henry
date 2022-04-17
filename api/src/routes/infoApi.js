
const data = require( '../fakeData');


const getInfo= ()=>{
        //  console.log('hola')
         var id_generated = 0
    const apiInfo= data?.map(el=>{
        
        return {
            // id:++id_generated,
            name: el.name,
            description: el.description,
            size: el.size,
            color: el.color,
            stock: el.stock,
            price: el.price,
            image: el.image,
            category: el.category,
            gender: el.gender,
            warranty: el.warranty, 
            brand: el.brand, 
            suitable_for: el.suitable_for, 
            composition: el.composition, 
            origin: el.origin, 
            important_data: el.important_data, 
            extras: el.extras,
            
           
        }
           
     })
    
    return apiInfo;
}



module.exports=getInfo