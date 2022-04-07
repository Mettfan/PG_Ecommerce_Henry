const { Product, User } = require('../../db.js')
const addProductToShoppingCart = async(req,res, next )=>{
    const { productId, userEmail } = req.body
    
   

    try{

        var productExistent = await Product.findOne({
            where: {
                id: productId
            }
        });
        var userClient = await User.findOne({
            where: {
                email: userEmail
            }
        })
        
        await userClient.addProduct(productExistent, { as : 'ShoppingCart'})
        res.status(401).json({msg: error, product: productCreated, userClient: userClient})
    }
    catch(error){
        console.log('error')
        res.status(401).json({msg: error})
    }

}

    module.exports = addProductToShoppingCart;
