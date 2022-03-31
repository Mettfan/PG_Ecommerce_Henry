const express = require('express');
const router = express.Router();

const getUsers = require('../Controllers/UserControllers/getUsers');
const postUser = require('../Controllers/UserControllers/postUser');
const putUser = require('../Controllers/UserControllers/putUser');
const putUserPassword = require('../Controllers/UserControllers/putUserPassword');
const deleteUser = require('../Controllers/UserControllers/deleteUser');

router.get('/', getUsers);
router.post('/crearusuario', postUser);
router.put('/actualizarusuario', putUser);
router.put('/actualizarpassword', putUserPassword);
router.delete('/eliminarusuario', deleteUser);

module.exports = router;