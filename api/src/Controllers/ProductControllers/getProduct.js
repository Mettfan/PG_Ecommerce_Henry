const getInfo=require('../../../src/routes/infoApi.js');
const { Product } = require('../../db.js')


const getProduct = async(req,res)=>{
    const apiInfo= await getInfo();
    let allProducts = await Product.findAll()

    //Esta función te muestra si hay algo en la base de datos y la rellena con la apiInfo si no existe nada 
    if (!allProducts.length) await Product.bulkCreate([...apiInfo]).then( async bulkRes => {
        let updatedProductList = await Product.findAll()
        res.send(updatedProductList.reverse())
    
    } )
    else{
        res.send(allProducts.reverse())
    }

    // res.json(allProducts.reverse().concat(apiInfo));
    }
    module.exports=getProduct;