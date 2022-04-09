const {  User } = require('../../db.js')
const getProductsFromShoppingCart = async(req,res, next )=>{
    const {  email } = req.body

    console.log(email, '<-USEREMAILBACK')
    
    await User.findOne( {where: { email: email }}).then( async usuario => {
        
        await  usuario.getProducts().then( shoppingList => {
            res.status(201).send({msg: shoppingList})
        }) 
    } ).catch( error => {
        console.log(error)
        res.send({msg: error})
        
    })
   
   

}

    module.exports = getProductsFromShoppingCart;
