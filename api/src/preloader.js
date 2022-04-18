const data = require('./fakeData');
const crearProduct = require('./Controllers/ProductControllers/crearProduct')

module.exports = async function preloader() {

    data.map((p) => crearProduct(p));
    console.log('Productos Pre-Cargados');

};