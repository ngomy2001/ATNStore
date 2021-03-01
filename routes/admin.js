var express = require('express');
var router = express.Router();
// const OrderController = require('../controllers/OrderController');
const ProductController = require('../controllers/ProductController');
const AuthController = require('../controllers/AuthController');

/* GET dashboard page. */
router.get('/', function (req, res, next) {
    console.log('hi mn');
    console.log(req.session);
    res.render('admin/');
});

/* GET product page. */
router.get('/product', ProductController.getAllProducts);

/* GET create product page. */
router.get('/product/create', function (req, res, next) {
    res.render('admin/ProductViews/create');
});

/* POST create product */
router.post('/product', ProductController.createProduct);

/* DELETE product */
router.get('/product/:productID', ProductController.deleteProduct);


module.exports = router;
