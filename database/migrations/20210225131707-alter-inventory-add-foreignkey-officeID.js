'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Inventories", {
      type: "foreign key",
      name: "fkey_constraint_inventory_officeID",
      fields: ["officeID"],
      references: {
        //Required field
        table: "Offices",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "Inventories",
      "fkey_constraint_inventory_officeID"
    );
  }
};
