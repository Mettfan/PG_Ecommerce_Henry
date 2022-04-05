const getInfo=require('../../../src/routes/infoApi.js');
const { Product } = require('../../db.js')
const productById=async(req,res)=>{
    const {id} = req.params
    const apiInfo=  getInfo();
   
        if (id) {
          let producto = await Product.findOne( { where: { id: id } } )
          res.send(producto)
        
        }
     
    }
    module.exports=productById;

  
