'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Offices', [
      {
        id: 1,
        name: 'ATN',
        city: 'DaNang',
        phone: '020312124125',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Store1',
        city: 'DaNang',
        phone: '0903122343',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Store2',
        city: 'DaNang',
        phone: '0905622343',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Offices', null, {});
  }
};
