const {Product} = require ('../../db');

const putProduct = async (req, res, next) => {
    const {id, description, size, color, gender, stock, stock_by_size, price, discount, warranty, brand, suitable_for, composition, origin, important_data, extras, image, disabled, category } = req.body;

    const allProducts = await Product.findAll();
    if (allProducts.length){
        try {
            const result = await Product.update({description, size, color, gender, stock, stock_by_size, price, discount, warranty, brand, suitable_for, composition, origin, important_data, extras, image, disabled, category},
                {where: {
                    id: id,
                }},
            )
            res.status(200).json({msg: 'Producto actualizado'});
        } catch (error) {
            next(error);
        }
    } else {
        res.status(400).json({msg: 'No hay productos almacenados en la base de datos'});
    }
}

module.exports = putProduct;