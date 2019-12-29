var express = require('express');
var userController = require('../controllers/users')
var router = express.Router();

/* GET users listing. */
router.post('/register', userController.addUser);

module.exports = router;
