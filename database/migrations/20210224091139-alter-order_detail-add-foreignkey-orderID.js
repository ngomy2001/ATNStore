'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Order_details", {
      type: "foreign key",
      name: "fkey_constraint_order_details_orderID",
      fields: ["orderID"],
      references: {
        //Required field
        table: "Orders",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "Orders",
      "fkey_constraint_order_details_orderID"
    );
  }
};
