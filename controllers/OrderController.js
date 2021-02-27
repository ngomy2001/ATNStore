const OrderService = require('../services/OrderService');

const getAllOrders = async (req, res, next) => {
    const orders = await OrderService.getAllOrders();
    console.log(orders);
    next();
}

module.exports = {
    getAllOrders,
}
