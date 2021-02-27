'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Orders", {
      type: "foreign key",
      name: "fkey_constraint_orders_employeeID",
      fields: ["employeeID"],
      references: {
        //Required field
        table: "Employees",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "Orders",
      "fkey_constraint_orders_employeeID"
    );
  }
};
