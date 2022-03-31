const express = require('express');

const router = express.Router();

const postUser = require('../Controllers/UserControllers/PostUser');

router.post('/', postUser);


module.exports = router;