'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        id: 1,
        name: 'nampt1',
        officeID: 1,
        email: 'namptgcd19818@fpt.edu.vn',
        password: '1',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'nampt2',
        officeID: 2,
        email: 'trungnam2101998@gmail.com',
        password: '1',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'nampt2',
        officeID: 3,
        email: 'namptgcd19818@gmail.com',
        password: '1',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Offices', null, {});
  }
};
