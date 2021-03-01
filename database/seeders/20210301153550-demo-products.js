'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: 1,
        name: 'toy1',
        description: 'Toy number one',
        price: 123,
        qtyInStock: '111',
        isSale: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'toy2',
        description: 'Toy number two',
        price: 456,
        qtyInStock: '222',
        isSale: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'toy3',
        description: 'Toy number three',
        price: 789,
        qtyInStock: '333',
        isSale: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Offices', null, {});
  }
};
