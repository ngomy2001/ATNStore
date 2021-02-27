const models = require("../database/models");

const getAllProducts = async (req, res) => {
    try {
        const products = await models.Product.findAll();
        if (products) return res.render('./admin/ProductViews/', { products: products });
        throw new Error("Product not found");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await models.Product.create(req.body);
        if (product) {
            return res.render('admin/ProductViews/create', { successMessage: 'Create product succesfully !' });
        }
        throw new Error("Error when create product");
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productID } = req.params;
        const deleted = await models.Product.destroy({
            where: { id: productID }
        });
        if (deleted) {
            const products = await models.Product.findAll();
            return res.render('admin/ProductViews/', { successMessage: 'delete product succesfully !', products: products });
        }
        throw new Error("Product not found");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct
}