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


const addProductToShoppingCart = require('../Controllers/ShoppingCartControllers/addProductToShoppingCart')
const getProductsFromShoppingCart = require('../Controllers/ShoppingCartControllers/getProductsFromShoppingCart')
const deleteProductFromShoppingCart = require('../Controllers/ShoppingCartControllers/deleteProductFromShoppingCart');
const logoutUser = require('../Controllers/UserControllers/logoutUser');
const userInformation = require('../Controllers/UserControllers/getUserInformation');

const addProductToFavorites = require('../Controllers/FavoritesControllers/addProductToFavorites');
const getProductFromFavorites = require('../Controllers/FavoritesControllers/getProductFromFavorites');
const deleteProductFromFavorites = require('../Controllers/FavoritesControllers/deleteProductFromFavorites')

// const postOrder = require('../Controllers/OrderControllers/postOrder')

router.get('/', checkAuth, checkRoleAdmin(['admin']), getUsers);
router.post('/crearusuario', postUser);
router.put('/actualizarusuario',  checkAuth, putUser);
router.put('/actualizarpassword', checkAuth, putUserPassword);
router.delete('/eliminarusuario', checkAuth, deleteUser);
router.post('/login', postLogin);
router.put('/userrol', checkAuth, checkRoleAdmin(['admin']), putUserRole);

router.get('/logout', logoutUser);
router.get('/info', checkAuth, userInformation);

router.post('/shopping', addProductToShoppingCart);
router.get('/shopping', getProductsFromShoppingCart);
router.delete('/shopping', deleteProductFromShoppingCart);

router.post('/favorites', addProductToFavorites);
// router.get('/favorites', getProductFromFavorites);
// router.delete('/favorites', deleteProductFromFavorites);
router.get('/favorites/:email', getProductFromFavorites);
router.delete('/favorites/:email/:productId', deleteProductFromFavorites);

const newsletter = require('../Controllers/NewsletterControllers/newsletter');
router.post('/newsletter', newsletter);
const newsProductFavorite = require('../Controllers/NewsletterControllers/newsletterByFavorites');
router.post('/newsfavorites', newsProductFavorite);

const addOrder = require ('../Controllers/OrderControllers/addOrder');
router.get('/order', addOrder);
const changeOrder = require ('../Controllers/OrderControllers/changeOrder');
router.put('/order/:id', changeOrder);

const postOrder = require ('../Controllers/OrderControllers/postOrder');
router.post('/order', postOrder);

const getOrders = require ('../Controllers/OrderControllers/getOrders');
router.get('/orders', getOrders);

const addReview = require('../Controllers/ReviewsControllers/addReview');
router.post('/review', addReview);
const getReviews = require('../Controllers/ReviewsControllers/getReviews');
router.get('/reviews', getReviews);
const getReview = require('../Controllers/ReviewsControllers/getReview');
router.get('/review', getReview);
const deleteReview = require('../Controllers/ReviewsControllers/deleteReview')
router.delete('/review', deleteReview);
const deleteReviewById = require('../Controllers/ReviewsControllers/deleteReviewById')
router.delete('/review/:id', deleteReviewById);
const forgotPassword = require('../Controllers/UserControllers/userForgotPassword');
router.post('/forgot', forgotPassword);



module.exports = router;