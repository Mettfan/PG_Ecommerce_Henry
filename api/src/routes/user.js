const express = require('express');
const router = express.Router();

const getUsers = require('../Controllers/UserControllers/getUsers');
const postUser = require('../Controllers/UserControllers/postUser');
const putUser = require('../Controllers/UserControllers/putUser');
const putUserPassword = require('../Controllers/UserControllers/putUserPassword');

router.get('/', getUsers);
router.post('/crearusuario', postUser);
router.put('/actualizarusuario', putUser);
router.put('/actualizarpassword', putUserPassword);

module.exports = router;