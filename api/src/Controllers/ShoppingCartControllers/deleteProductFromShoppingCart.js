const {User} = require('../../db.js');

const deleteProductFromShoppingCart = async (req, res, next) => {
    try {
        const {email, id} = req.body;
        const user = await User.findOne({where: {email}});
        const products = await user.getProducts();
        const userId = products.map(product => product.id);
        if(userId.includes(parseInt(id))) {
            const cart = await user.removeProduct(parseInt(id));
            return res.status(200).json ({cart, msg: 'Producto eliminado con éxito'});
        } else {
            return res.status(404).json({msg: 'Error, producto no encontrado'})
        }
    } catch (error) {
        next(error);
    }
}

module.exports = deleteProductFromShoppingCart;