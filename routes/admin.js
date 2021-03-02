var express = require('express');
var router = express.Router();
const OrderController = require('../controllers/OrderController');
const ProductController = require('../controllers/ProductController');
const AuthController = require('../controllers/AuthController');
const models = require('../database/models/index');


/* GET dashboard page. */
router.get('/', async function (req, res, next) {
    const orders = await models.Order.findAll({
        attributes: ['id', 'employeeID', 'productID', 'quantity', 'price', 'createdAt'],
        include: [
            {
                model: models.Product,
                attributes: ['name']
            },
            {
                model: models.Employee,
                attributes: ['name']
            }
        ]
    });
    console.log(orders);
    res.render('admin/ATN/', { orders: orders });
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


/* GET product page. */
router.get('/order', OrderController.getAllOrders);

/* GET create order page. */
router.get('/order/create', async function (req, res, next) {
    const products = await models.Product.findAll();
    const currentEmp = req.session.employee;
    res.render('admin/OrderViews/create', { products: products, employee: currentEmp });
});

/* POST create product */
router.post('/order', OrderController.createOrder);

/* DELETE order */
router.get('/order/:orderID', OrderController.deleteOrder);

module.exports = router;
