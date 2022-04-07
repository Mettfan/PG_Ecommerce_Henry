const { Product, User } = require('../../db.js')
const addProductToShoppingCart = async(req,res, next )=>{
    const { productId, userEmail } = req.body
    
   
    await Product.findOne( {where: {id: productId}}).then( async producto => {
        await User.findOne( {where: {email: userEmail}}).then( async usuario => {
            await usuario.addProduct(producto)
            res.send({msg: "listo"})
        } )
    }).catch( error => {
        console.log(error)
        res.send({msg: error})
        
    })
   

}

    module.exports = addProductToShoppingCart;
