const { Router } = require('express');

const {getInfo} =require('./infoApi.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getUsers = require('./user.js');
const postUser = require('./user.js');
const putUser = require('./user.js');
const putUserPassword = require('./user.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/productos', async(req,res)=>{
    const apiInfo= await getInfo();
    res.send(apiInfo);
    })
router.use('/usuario', getUsers);
router.use('/usuario', postUser);
router.use('/usuario', putUser);
router.use('/usuario', putUserPassword);
module.exports = router;
