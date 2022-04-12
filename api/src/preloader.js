const data = require('./fakeData');
const { Product, Category } = require('./db');

module.exports = async function preloader() {
    try {
        async function create(p) {
            const catCreate = await Category.findOrCreate({
                where: { name: p.category }
            });
            const proCreate = await Product.create(p);

            // los relaciono
            catCreate.addProduct(proCreate);
        }

        data.map((p) => create(p));
        console.log('Ahora si?')

    } catch (error) {
        console.error(error);
    }
};