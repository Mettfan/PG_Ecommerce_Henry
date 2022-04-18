const { Product, Category } = require('../../db.js')
const postProduct = async (req, res, next) => {

    const { name, description, size, color, gender, stock, stock_by_size, price, discount, warranty, brand, suitable_for, composition, origin, important_data, extras, image, disabled, category } = req.body

    try {
        let productCreated = await Product.create({ name, description, size, color, gender, stock, stock_by_size, price, discount, warranty, brand, suitable_for, composition, origin, important_data,extras, image, disabled, category: (category || 'General') });

        try {
            await Category.create({ name: category })
            }
            catch (error) {
                console.log('categoryExists' + error);
            }

        let categoryCreated = await Category.findOne({where: {name: category}})
        await categoryCreated.addProduct(productCreated) 

        res.status(201).json({ msg: 'Product created correctly with id', id: productCreated })
    }
    catch(error){
        console.log('Post Error' + error)
    }
};
module.exports = postProduct;
