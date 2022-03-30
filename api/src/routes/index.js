const { Router } = require('express');

const {getInfo} =require('./infoApi.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/productos', async(req,res)=>{
    const apiInfo= await getInfo();
    res.send(apiInfo);
    })

module.exports = router;
