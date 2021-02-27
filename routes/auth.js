var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');

/* GET login page. */
router.get('/login', AuthController.loginPage);

/* GET logout. */
router.get('/logout', AuthController.logout);

/* POST handle login */
router.post('/login', AuthController.handleLogin);
module.exports = router;
