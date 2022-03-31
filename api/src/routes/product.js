const express = require('express');
const router = express.Router();

const getProduct=require('../Controllers/ProductControllers/getProduct');
const productById=require('../Controllers/ProductControllers/productById');

router.get('/', getProduct);
router.get('/:id', productById);

module.exports = router;


