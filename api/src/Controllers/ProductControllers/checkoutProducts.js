const { Product, User, UserProduct } = require('../../db.js')
const mercadopago = require('mercadopago')
// const { response } = require('express')
mercadopago.configure({
    access_token: 'APP_USR-4206952764594865-041216-86c66dae1de7c07e9a7a855ed313ba08-355601564'
})
const checkoutProducts = async(req,res, next )=>{
   
   const { productList, userEmail, total } = req.body
   console.log(  JSON.parse(productList), userEmail, total)
   let productOrder = JSON.parse(productList)?.map( item => {
    //    return item
       return {
        title: item.name,
        unit_price: item.price,
        quantity: item.quantity || 1,
        picture_url: item.image,
        category_id: item.CategoryName,
        // description: item.description
       }
   })
   console.log(productOrder);
   let preference = {
       items: productOrder,
       back_urls:{
            'success': "http://localhost:3001/usuario/order",
            'failure': "http://localhost:3001/usuario/order",
            'pending': "http://localhost:3001/usuario/order"
       },
       auto_return: 'approved'
 
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
