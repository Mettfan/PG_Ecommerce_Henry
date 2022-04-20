const {Product, User, Favorite} = require('../../db.js');

const addProductToFavorites = async (req, res, next) => {
    try {
        const {email, productId} = req.body;
        const product = await Product.findOne({where: {id: productId}});
        
        if (!product) {
            res.status(404).json({msg: 'Producto no encontrado'});
        } else {
            const favorite = await Favorite.create({
                id: product.id,
                name: product.name,
                description: product.description,
                size: product.size,
                color: product.color,
                gender: product.gender,
                stock: product.stock,
                stock_by_size: product.stock_by_size,
                price: product.price,
                discount: product.descount,
                warranty: product.warranty, 
                brand: product.brand, 
                suitable_for: product.suitable_for, 
                composition: product.composition, 
                origin: product.origin, 
                important_data: product.important_data,
                extras: product.extras,
                image: product.image,
                
            });
            
            const user = await User.findOne({where: {email: email}});
            if(!user) {
                res.status(404).json({msg: 'Usuario no encontrado'});
            } else {
                const addUser = await user.addFavorite(favorite)
                res.status(200).json({favorite, msg:'Producto agregado a favoritos'});
            }

        }

    } catch (error) {
        next(error);
    }

}

module.exports = addProductToFavorites;