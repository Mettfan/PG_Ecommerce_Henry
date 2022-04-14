const { Product, User, UserProduct } = require('../../db.js')
const mercadopago = require('mercadopago')
// const { response } = require('express')
mercadopago.configure({
    access_token: 'TEST-4206952764594865-041216-028452a32798538039fa45b86c249fed-355601564'
})
const checkoutProducts = async(req,res, next )=>{
   
   const { productList, userEmail, total } = req.body
   console.log( typeof productList, userEmail, total)
   let productOrder = productList.split(',').map( item => {
       return {
        title: item,
        unit_price: parseInt(total),
        quantity: 1
       }
   })
   let preference = {
       items: productOrder,
       notification_url: ''
       
    // [
    //     {
    //         title: productList[0],
    //         unit_price: 100,
    //         quantity: 1
    //     },
    //     {
    //         title: productList[1],
    //         unit_price: 200,
    //         quantity: 2
    //     }
    // ]
   } 
   mercadopago.preferences.create(preference).then( response => {
       //respuesta mp
       res.redirect(response.body.init_point)
    //    res.send({msg: 'checkout', productList, userEmail, total})
   }, error => {
       //error de mp
       console.log(error)
   })
  
   

}

module.exports = checkoutProducts;
