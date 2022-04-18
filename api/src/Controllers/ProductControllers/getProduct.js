const getInfo=require('../../../src/routes/infoApi.js');
const data = require( '../../productsList');
const { Product, Category } = require('../../db.js');



const getProduct = async(req,res)=>{

    try {
        const apiInfo= data;
        let allProducts = await Product.findAll({include:[
            {model: Category}
        ]})
        
        // console.log(JSON.stringify(mockData))
        //Esta función te muestra si hay algo en la base de datos y la rellena con la apiInfo si no existe nada 
        // if (!allProducts.length) await Product.bulkCreate([...apiInfo]).then( async bulkRes => {
            
            
        //     let updatedProductList = await Product.findAll()
            
        //     res.send(updatedProductList.reverse())
        
        // } )
        // else{
            // res.send(allProducts)
        // }
        res.send(allProducts)
    
        // res.json(allProducts.reverse().concat(apiInfo)); 
    } catch (error) {
        console.log(error);
    }
    
    
}
    module.exports=getProduct;