const {  User } = require('../../db.js')
const getProductsFromShoppingCart = async(req,res, next )=>{
    const {  userEmail } = req.body
    
    await User.findOne( {where: {email: userEmail}}).then( async usuario => {
        
        await  usuario.getProducts().then( shoppingList => {
            res.send({msg: shoppingList})
        }) 
    } ).catch( error => {
        console.log(error)
        res.send({msg: error})
        
    })
   
   

}

    module.exports = getProductsFromShoppingCart;
