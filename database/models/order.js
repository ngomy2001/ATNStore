'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Employee, {
        foreignKey: "employeeID",
        targetKey: "id"
      });
      Order.belongsTo(models.Product, {
        foreignKey: 'productID'
      });
    }
  };
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    employeeID: {
      type: DataTypes.INTEGER
    },
    productID: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.DOUBLE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};