module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("models", [
      {
        size: "39",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        size: "39",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "40",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "40",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "41",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "41",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "42",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "42",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "43",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "43",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "44",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "44",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "45",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "45",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "46",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "46",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "47",
        color: "White",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        size: "47",
        color: "black",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("models", null, {});
  },
};
