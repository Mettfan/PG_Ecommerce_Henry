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
const userForgotMail = require('../Controllers/UserControllers/userForgotMail');
const userRegisterMail = require('../Controllers/UserControllers/userRegisterMail');
const userOrderMail=require('../Controllers/UserControllers/userOrderMail');

const addProductToShoppingCart = require('../Controllers/ShoppingCartControllers/addProductToShoppingCart')
const getProductsFromShoppingCart = require('../Controllers/ShoppingCartControllers/getProductsFromShoppingCart')
const logoutUser = require('../Controllers/UserControllers/logoutUser');

router.get('/', checkAuth, checkRoleAdmin(['admin', 'superadmin']),  getUsers);
router.post('/crearusuario', postUser);
router.put('/actualizarusuario', putUser);
router.put('/actualizarpassword', putUserPassword);
router.delete('/eliminarusuario', deleteUser);
router.post('/login', postLogin);
router.put('/userrol', checkAuth, checkRoleAdmin(['superadmin']), putUserRole);

router.post('/forgot', userForgotMail);
router.post('/subscribe', userRegisterMail );
router.post('/orderemail', userOrderMail);





router.get('/logout', logoutUser);


router.post('/shopping', addProductToShoppingCart )
router.get('/shopping', getProductsFromShoppingCart )
module.exports = router;