'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Inventories", {
      type: "foreign key",
      name: "fkey_constraint_inventory_productID",
      fields: ["productID"],
      references: {
        //Required field
        table: "Products",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "Inventories",
      "fkey_constraint_inventory_productID"
    );
  }
};
