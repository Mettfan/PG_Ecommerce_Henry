const { Product, User, UserProduct } = require('../../db.js')
const addProductToShoppingCart = async(req,res, next )=>{
    const { productId, userEmail } = req.body
    
   
    await Product.findOne( {where: {id: productId}}).then( async producto => {
        await User.findOne( {where: {email: userEmail}}).then( async usuario => {
            await usuario.addProduct(producto)
                await  Product.findAll({where: { email: userEmail} }, {include: [UserProduct]}).then( shopping => {
                    res.send({msg: 'Shopping List', shopping: shopping })
                
            })
        } )
    }).catch( error => {
        console.log(error)
        res.send({msg: error})
        
    })
   

}

    module.exports = addProductToShoppingCart;
