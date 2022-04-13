const express = require('express');
const router = express.Router();

const getUsers = require('../Controllers/UserControllers/getUsers');
const postUser = require('../Controllers/UserControllers/postUser');
const putUser = require('../Controllers/UserControllers/putUser');
const putUserPassword = require('../Controllers/UserControllers/putUserPassword');
const deleteUser = require('../Controllers/UserControllers/deleteUser');
const postLogin = require('../Controllers/UserControllers/loginUser');
const checkAuth = require('../middlewares/auth');
const checkRoleAdmin = require('../middlewares/roleAuth');
const putUserRole = require('../Controllers/UserControllers/putUserRol');
const postUserEmail = require('../Controllers/UserControllers/postUserEmail');

const addProductToShoppingCart = require('../Controllers/ShoppingCartControllers/addProductToShoppingCart')
const getProductsFromShoppingCart = require('../Controllers/ShoppingCartControllers/getProductsFromShoppingCart')
const deleteProductFromShoppingCart = require('../Controllers/ShoppingCartControllers/deleteProductFromShoppingCart');

const logoutUser = require('../Controllers/UserControllers/logoutUser');


const addProductToFavorites = require('../Controllers/FavoritesControllers/addProductToFavorites');
const getProductFromFavorites = require('../Controllers/FavoritesControllers/getProductFromFavorites');
const deleteProductFromFavorites = require('../Controllers/FavoritesControllers/deleteProductFromFavorites')

router.get('/', checkAuth, checkRoleAdmin(['admin', 'superadmin']),  getUsers);
router.post('/crearusuario', postUser);
router.put('/actualizarusuario', putUser);
router.put('/actualizarpassword', putUserPassword);
router.delete('/eliminarusuario', deleteUser);
router.post('/login', postLogin);
router.put('/userrol', checkAuth, checkRoleAdmin(['superadmin']), putUserRole);
router.post('/subscribe', postUserEmail);
router.get('/logout', logoutUser);

router.post('/shopping', addProductToShoppingCart);
router.get('/shopping', getProductsFromShoppingCart);
router.delete('/shopping', deleteProductFromShoppingCart);

router.post('/favorites', addProductToFavorites);
router.get('/favorites', getProductFromFavorites);
router.delete('/favorites/:email/:productId', deleteProductFromFavorites);

const newsletter = require('../Controllers/NewsletterControllers/newsletter');
router.post('/newsletter', newsletter);
const newsProductFavorite = require('../Controllers/NewsletterControllers/newsletterByFavorites');
router.post('/newsfavorites', newsProductFavorite);

module.exports = router;