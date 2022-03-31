const { Router } = require('express');

const {getInfo} =require('./infoApi.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getUsers = require('./user.js');
const postUser = require('./user.js');
const putUser = require('./user.js');
const putUserPassword = require('./user.js');
const deleteUser = require('./user.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/crearusuario', postUser);
router.use('/usuario', getUsers);
router.use('/usuario', postUser);
router.use('/usuario', putUser);
router.use('/usuario', putUserPassword);
router.use('/usuario', deleteUser);

router.get('/productos', async(req,res)=>{
    const apiInfo= await getInfo();
    res.send(apiInfo);
    })




router.get('/producto/:id', async(req,res)=>{
    const {id} = req.params
    const apiInfo= await getInfo();
    try {
        if (id) {
          let productId = await apiInfo.filter((el) => el.id === parseInt(id)
          );
       
          productId.length? res.status(200).send(productId)
            : res.status(400).send("Not found");
        }
      } catch (err) {
        res.json({ message: err });
      }
    })  

  





module.exports = router;
