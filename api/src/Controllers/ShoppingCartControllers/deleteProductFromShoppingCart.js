const {User} = require('../../db.js');

const deleteProductFromShoppingCart = async (req, res, next) => {
    try {
        const {email, productId} = req.body;
        console.log(email, productId, 'desde el back')
        // const idNumber = parseInt(productId);
        const user = await User.findOne({where: {email}});
        console.log(user)
        if(!user) {
            res.status(404).json({msg: 'Usuario no encontrado'});
        } else {
            const products = await user.getProducts();
            const ids = products.map(prod => prod.id);
            console.log(ids, 'ids')
            console.log(parseInt(productId), 'productid')
            if(ids.includes(parseInt(productId))) {
                const cart = await user.removeProduct(parseInt(productId));
                res.status(200).json({cart, msg: 'Producto eliminado de favoritos'});
            } else {
                res.status(404).json({msg: 'Producto no encontrado'});
            }   
        }
    } catch (error) {
        next(error);
    }

}

module.exports = deleteProductFromShoppingCart;