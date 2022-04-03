const { Product } = require('../../db.js')
const postProduct = async(req,res)=>{
    const {name, description, size, color, gender, stock, price, image} = req.body
    console.log(name,' posting...')
    try {
        if (name) {
            let productCreated = await Product.create({name, description, size: size.join('-'), color, gender, stock, price, image});
            res.status(201).json({msg: 'Product created correctly with id', id: productCreated.id})
            
            
        }
      } catch (err) {
        res.json({ message: err });
      }
    }
    module.exports = postProduct;
