const models = require("../database/models");
const Order = models.Order;
const Product = models.Product;
const Employee = models.Employee;

const getAllOrders = async (req, res) => {
    console.log('im here');
    try {
        const orders = await Order.findAll({
            attributes: ['id', 'employeeID', 'productID', 'quantity', 'price', 'createdAt'],
            include: [
                {
                    model: Product,
                    attributes: ['name']
                },
                {
                    model: Employee,
                    attributes: ['name']
                }
            ]
        });
        if (orders) return res.render('./admin/OrderViews/', { orders: orders });
        throw new Error("Order not found");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};

const createOrder = async (req, res) => {
    try {
        console.log(req.body);
        const order = await models.Order.create(req.body);
        if (order) {
            return res.redirect('/admin/order/');
        }
        throw new Error("Error when create order");
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { orderID } = req.params;
        const deleted = await models.Order.destroy({
            where: { id: orderID }
        });
        if (deleted) {
            const orders = await models.Order.findAll();
            return res.render('admin/OrderViews/', { successMessage: 'delete order succesfully !', orders: orders });
        }
        throw new Error("Order not found");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllOrders,
    createOrder,
    deleteOrder
}