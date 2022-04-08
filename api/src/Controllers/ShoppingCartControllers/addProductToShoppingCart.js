const { Product, User, UserProduct } = require('../../db.js')
const addProductToShoppingCart = async(req,res, next )=>{
    const { productId, userEmail } = req.body
    
   
    await Product.findOne( {where: {id: productId}}).then( async producto => {
        await User.findOne( {where: {email: userEmail}}).then( async usuario => {
            await usuario.addProduct(producto)
                await  usuario.getProducts().then( shoppingList => {
                    res.send({msg: shoppingList})
                }) 
        } )
    }).catch( error => {
        console.log(error)
        res.send({msg: error})
        
    })
   

}

    module.exports = addProductToShoppingCart;
