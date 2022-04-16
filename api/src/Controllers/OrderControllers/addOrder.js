const {  User } = require('../../db.js')
const {nanoid} = require('nanoid')


const addOrder = async (req, res, next) => {
    const {status, status_detail, email} = req.body;
    try {
        if(status !== 'approved') {
            res.status(400).json({msg: 'No se ha aprobado la transacción'});

        } else {
            if (status_detail !== 'accredited') {
                res.status(400).json({msg: 'No se ha acreditado la transacción'});
            } else {
                const user = await User.findOne({where: {email: email}});
                if(!user) {
                    res.status(404).json({msg: 'Usuario no encontrado'});
                } else {
                    const products = await user.getProducts();
                    const productsName = products.map(product => product.name);
                    const productsPrice = products.map(product => product.price);
                    
                    const order = await user.createOrder({
                        id: nanoid(),
                        state: "pending",
                        total: Math.round(productsPrice.reduce((a, b) => a + b, 0)),
                        
                    });
                    console.log(order.total)
                    res.status(201).json({
                        msg: 'Orden creada', 
                        productsName,
                        productsPrice,
                        user: user.name,
                        address: user.address,
                        email: user.email,
                        phone: user.phone,        
                        order,
                    });
                    //console.log(order, 'order');
                }
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = addOrder;