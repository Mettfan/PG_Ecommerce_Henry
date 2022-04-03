const express = require('express');
const router = express.Router();

const getProduct=require('../Controllers/ProductControllers/getProduct');
const productByGender = require('../Controllers/ProductControllers/getProductByGenres');
const productById=require('../Controllers/ProductControllers/productById');


router.get('/', getProduct);
router.get('/:id', productById);
router.get('/gender/:gender', productByGender)

module.exports = router;


