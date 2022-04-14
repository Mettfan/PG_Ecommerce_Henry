const { Product, Category } = require('../../db.js')
const postProduct = async(req,res, next )=>{
    const {name, description, size, color, gender, stock, price, discount, warranty, brand, suitable_for, composition, origin, important_data, extras, disabled, image, category} = req.body
    console.log(name, typeof name)
    console.log(description, typeof description)
    console.log(size, typeof size)
    console.log(color, typeof color)
    console.log(gender, typeof gender)
    console.log(stock, typeof stock)
    console.log(price, typeof price)
    console.log(category)

    try{

        let productCreated = await Product.create({ name: name, description: description, size: size, color: color, gender: gender, stock: stock, price: price, discount: discount, warranty, brand, suitable_for, composition, origin, important_data, extras, disabled, image: image, category: (category || 'General') });
        

        try{
            await Category.create({name: category})

        }

        catch(err){
            console.log('categoryExists')
            
            
        }
        let categoryCreated = await Category.findOne({where: {name: category}})
        await categoryCreated.addProduct(productCreated) 
        res.status(201).json({msg: 'Product created correctly with id', id: productCreated})
    
    }
    catch(error){
        console.log('Post Error ')
    }
    }

    module.exports = postProduct;
