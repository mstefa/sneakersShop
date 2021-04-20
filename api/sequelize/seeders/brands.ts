module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [{
      name: 'Adidas',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Nike',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Reebok',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Puma',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Converse',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Columbia',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  }
};
