const {User} = require('../../db.js');

const deleteAllProductsShoppingCart = async (req, res, next) => {
    try {
        const {email} = req.query;
        
        const user = await User.findOne({where: {email}});
       
        if(!user) {
            res.status(404).json({msg: 'Usuario no encontrado'});
        } else {
            const products = await user.getProducts();
           
            if(products.length){
                const ids = products.map(prod => prod.id);
                console.log(products, 'products')
                for(index in ids) {
                    await user.removeProducts(ids[index]);
                }
                res.status(200).json({msg: 'Productos eliminados del carrito'});
                 
                
            } else {
                res.status(404).json({msg: 'Carrito vacío'});
            }
        }
    } catch (error) {
        next(error);
    }

}

module.exports = deleteAllProductsShoppingCart;