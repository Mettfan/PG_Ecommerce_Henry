const {  User } = require('../../db.js')
const {nanoid} = require('nanoid')


let token = 'APP_USR-4206952764594865-041216-86c66dae1de7c07e9a7a855ed313ba08-355601564'
const addOrder = async (req, res, next) => {
    const {status, payment_id, collection_id, collection_status, preference_id} = req.query;
    console.log(req.query)
    
    res.redirect(`http://localhost:3000/order/finder/?collection_id=${collection_id}&collection_status=${collection_status}&payment_id=${payment_id}&status=${status}&preference_id=${preference_id}`)
    // try{
    //     switch (status){
    //         case 'approved':
    //             return res.send({msg: payment_id})
                
    //         case 'pending':
    //             return res.send({msg: 'pending', id: payment_id})
    //         default:
    //             return res.send({msg: 'rejected' })
    //     }
        
      
    // }catch (error) {
    //     res.send({msg: error})
    // }
    
   
    // try {
    //     if(status !== 'approved') {
    //         res.status(400).json({msg: 'No se ha aprobado la transacción'});

    //     } else {
    //         if (status_detail !== 'accredited') {
    //             res.status(400).json({msg: 'No se ha acreditado la transacción'});
    //         } else {
    //             const user = await User.findOne({where: {email: email}});
    //             if(!user) {
    //                 res.status(404).json({msg: 'Usuario no encontrado'});
    //             } else {
    //                 const products = await user.getProducts();
    //                 const productsName = products.map(product => product.name);
    //                 const productsPrice = products.map(product => product.price);
                    
    //                 const order = await user.createOrder({
    //                     id: nanoid(),
    //                     state: "pending",
    //                     total: Math.round(productsPrice.reduce((a, b) => a + b, 0)),
                        
    //                 });
    //                 console.log(order.total)
    //                 res.status(201).json({
    //                     msg: 'Orden creada', 
    //                     productsName,
    //                     productsPrice,
    //                     user: user.name,
    //                     address: user.address,
    //                     email: user.email,
    //                     phone: user.phone,        
    //                     order,
    //                 });
    //                 //console.log(order, 'order');
    //             }
    //         }
    //     }
    // } catch (error) {
    //     next(error);
    // }

}

module.exports = addOrder;