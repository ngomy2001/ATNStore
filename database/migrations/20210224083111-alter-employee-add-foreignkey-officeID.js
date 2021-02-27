'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Employees", {
      type: "foreign key",
      name: "fkey_constraint_employees_officeID",
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
      "Employees",
      "fkey_constraint_employees_officeID"
    );
  }
};
