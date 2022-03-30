
const data = require( '../fakeData');


     function getInfo (){
         console.log('hola')
    const apiInfo= data?.map(el=>{
        
        return {
            genre:el.genre,
             name:el.name,
            description:el.description,
            size:el.size,
            color:el.color,
            stock:el.stock,
            price:el.price,
            image:el.image
           
        }
           
     })
    
    return apiInfo;
}



module.exports={getInfo}