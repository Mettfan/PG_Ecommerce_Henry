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
const getProduct = require('./product.js');
const productById = require('./product.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/crearusuario', postUser);
router.use('/usuario', getUsers);
router.use('/usuario', postUser);
router.use('/usuario', putUser);
router.use('/usuario', putUserPassword);
router.use('/usuario', deleteUser);

router.use('/productos', getProduct);
router.use('/productos/:id', productById);







  





module.exports = router;
