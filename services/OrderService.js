const models = require("../database/models");

const getAllOrders = () => {
    return models.Order.findAll();
}

module.exports = {
    getAllOrders,
}