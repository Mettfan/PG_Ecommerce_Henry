const {Product, User} = require('../../db.js');

const addProductToFavorites = async (req, res, next) => {
    try {
        const {email, productId} = req.body;
        const product = await Product.findOne({where: {id: productId}});
        //console.log(product, 'product')

                if (!product) {
                    res.status(404).json({msg: 'Producto no encontrado'});
                } else {
                    const user = await User.findOne({where: {email: email}});
                    //console.log(user, 'user')
                    if(!user) {
                        res.status(404).json({msg: 'Usuario no encontrado'});
                    } else {
                        const favorite = await user.addProduct(product)
                        res.status(200).json({favorite, msg:'Producto agregado a favoritos'});
                    }

                }

    } catch (error) {
        next(error);
    }

}

module.exports = addProductToFavorites;