const express = require('express');
const router = express.Router();

const getProduct=require('../Controllers/ProductControllers/getProduct');
const productByGender = require('../Controllers/ProductControllers/getProductByGenres');
const productById=require('../Controllers/ProductControllers/productById');
const deleteProduct = require('../Controllers/ProductControllers/deleteProduct');
const postProduct = require('../Controllers/ProductControllers/postProduct');

const checkoutProducts = require('../Controllers/ProductControllers/checkoutProducts');


const putProduct = require('../Controllers/ProductControllers/putProduct');

router.get('/', getProduct);
router.get('/:id', productById);
router.get('/gender/:gender', productByGender)
router.post('/',checkAuth, checkRoleAdmin(['admin']), postProduct)
router.post('/checkout',checkAuth, checkoutProducts)
router.delete('/:id', checkAuth, checkRoleAdmin(['admin']),deleteProduct);
router.put('/putproduct', checkAuth, checkRoleAdmin(['admin']),putProduct);

module.exports = router;
