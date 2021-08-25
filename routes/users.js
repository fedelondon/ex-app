const express = require('express');
const { use } = require('.');
const router = express.Router();
const userController = require('../config/controler/userController')

/* GET users listing. */
router.get('/', userController.findUsuarios);

/* POST users listing. */
router.post('/', userController.newUser);

module.exports = router;
