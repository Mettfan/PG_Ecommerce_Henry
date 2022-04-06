const { Product } = require('../../db.js')
const postProduct = async(req,res)=>{
    const {name, description, size, color, gender, stock, price, image} = req.body
    console.log(name, typeof name)
    console.log(description, typeof description)
    console.log(size, typeof size)
    console.log(color, typeof color)
    console.log(gender, typeof gender)
    console.log(stock, typeof stock)
    console.log(price, typeof price)

    let productCreated = await Product.create({ name: name, description: description, size: size, color: color, gender: gender, stock: stock, price: price, image: image });
    res.status(201).json({msg: 'Product created correctly with id', id: productCreated})
            
            
     
    }

    module.exports = postProduct;
