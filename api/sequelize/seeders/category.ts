module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: 'Urban',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Running',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Skateboarding',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Training',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sports',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Modern',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
