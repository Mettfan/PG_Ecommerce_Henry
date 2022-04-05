
const data = require( '../fakeData');


const getInfo= ()=>{
        //  console.log('hola')
         var id_generated = 0
    const apiInfo= data?.map(el=>{
        
        return {
            // id:++id_generated,
            gender:el.gender,
            name:el.name,
            description:el.description,
            size:el.size,
            color:el.color,
            stock:el.stock,
            price:el.price,
            category_name:el.category,
            image:el.image,
           
        }
           
     })
    
    return apiInfo;
}



module.exports=getInfo