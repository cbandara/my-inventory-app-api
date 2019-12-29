var express = require('express');
const passport = require("passport");
var productController = require('../controllers/products')
var router = express.Router();
const jwtAuth = passport.authenticate("jwt", { session: false });

/* GET products listing. */
router.get('/', jwtAuth, productController.getAllProducts);
router.post('/', jwtAuth, productController.addProduct);
router.delete('/:id', jwtAuth, productController.deleteProduct);
router.put('/:id', jwtAuth, productController.updateProduct);

module.exports = router;
