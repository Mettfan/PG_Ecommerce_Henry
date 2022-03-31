const getInfo=require('../../../src/routes/infoApi.js');


const getProduct = async(req,res)=>{
    const apiInfo= await getInfo();
    res.send(apiInfo);
    }
    module.exports=getProduct;