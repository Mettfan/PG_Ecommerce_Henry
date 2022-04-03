const getInfo=require('../../../src/routes/infoApi.js');
const { Product } = require('../../db.js')


const getProduct = async(req,res)=>{
    const apiInfo= await getInfo();
    let allProducts = await Product.findAll()

    res.json(allProducts.reverse().concat(apiInfo));
    }
    module.exports=getProduct;