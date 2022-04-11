const getInfo=require('../../../src/routes/infoApi.js');
const { Product } = require('../../db.js')
const productById=async(req,res)=>{

    try {
    const {id} = req.params
    const apiInfo=  getInfo();
   
        if (id) {
          let producto = await Product.findOne( { where: { id: id } } )
          res.send(producto)
        
        }
     
    } catch (error) {
        console.log(error);
    }

}
    module.exports=productById;

  
