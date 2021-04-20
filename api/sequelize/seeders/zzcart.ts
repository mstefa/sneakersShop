module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("carts", [
      {
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("carts", null, {});
  },
};
