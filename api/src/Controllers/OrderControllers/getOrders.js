
const { Product, Category, Order } = require('../../db.js');



const getOrders = async(req,res)=>{

    try {
       
        await Order.findAll().then(response => {
            res.send(response)
        })

     
    
        // res.json(allProducts.reverse().concat(apiInfo)); 
    } catch (error) {
        console.log(error);
    }
    
    
}
    module.exports=getOrders;