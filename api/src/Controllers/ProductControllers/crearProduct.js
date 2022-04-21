const { Product, Category } = require('../../db.js');

const crearProduct = async (producto) => {
    console.log('producto', producto)
    console.log('typeof(producto.stock_by_size)', typeof(producto.stock_by_size))
    try {
        const productCreated = await Product.create(producto);
        try {
            await Category.findOrCreate({
                    where: { name: producto.category }
                });
            }
            catch (err) {
                console.log(err);
            }

        const categoryCreated = await Category.findOne({ where: { name: producto.category } });
        await categoryCreated.addProduct(productCreated);
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = crearProduct;
