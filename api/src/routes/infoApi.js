
const data = require( '../fakeData');


     function getInfo (){
         console.log('hola')
    const apiInfo= data?.map(el=>{
        
        return {
            id: el.id,
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



module.exports={getInfo}