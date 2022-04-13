const express = require('express');
const router = express.Router();

const getProduct=require('../Controllers/ProductControllers/getProduct');
const productByGender = require('../Controllers/ProductControllers/getProductByGenres');
const productById=require('../Controllers/ProductControllers/productById');
const deleteProduct = require('../Controllers/ProductControllers/deleteProduct');
const postProduct = require('../Controllers/ProductControllers/postProduct');
const checkoutProducts = require('../Controllers/ProductControllers/checkoutProducts');


router.get('/', getProduct);
router.get('/:id', productById);
router.get('/gender/:gender', productByGender)
router.post('/', postProduct)
router.post('/checkout', checkoutProducts)
router.delete('/:id', deleteProduct);

module.exports = router;


