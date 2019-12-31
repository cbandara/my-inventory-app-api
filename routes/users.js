var express = require('express');
var userController = require('../controllers/users')
var router = express.Router();

/* GET users listing. */
router.post('/register', (req, res, next) => { console.log("======req", req.body), next() }, userController.addUser);

module.exports = router;
