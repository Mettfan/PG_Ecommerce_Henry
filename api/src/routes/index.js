const { Router } = require('express');

//const {getInfo} =require('./infoApi.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getUsers = require('./user.js');
const postUser = require('./user.js');
const putUser = require('./user.js');
const putUserPassword = require('./user.js');
const deleteUser = require('./user.js');
const login = require('./user.js');
const putUserRol = require('./user')
const logoutUser = require('./user.js')
const postUserEmail = require('./user.js');
const getProduct = require('./product.js');
const productById = require('./product.js');
const productByGender = require('./product.js');
const postProduct = require('./product.js');
const deleteProduct = require('./product.js');
const addProductToShoppingCart = require('./user.js');
const getProductsFromShoppingCart = require('./user.js');
const deleteProductFromShoppingCart = require('./user.js')
const addProductToFavorites = require('./user.js');
const getProductFromFavorites = require('./user.js');
const deleteProductFromFavorites = require('./user.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/usuario', getUsers);
router.use('/usuario', postUser);
router.use('/usuario', putUser);
router.use('/usuario', putUserPassword);
router.use('/usuario', deleteUser);
router.use('/usuario', login);
router.use('usuario', putUserRol)
router.use('/usuario', postUserEmail);
router.use('/usuario', logoutUser)
router.use('/productos', getProduct);
router.use('/productos/:id', productById);
router.use('/productos/:gender', productByGender)
router.use('/productos/:id', deleteProduct);

router.use('/productos', postProduct);

router.use('/usuario', addProductToShoppingCart);
router.use('/usuario', getProductsFromShoppingCart);
router.use('/usuario', deleteProductFromShoppingCart);

router.use('/usuario', addProductToFavorites);
router.use('/usuario', getProductFromFavorites);
router.use('/usuario', deleteProductFromFavorites);





  





module.exports = router;
