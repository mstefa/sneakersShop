module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('productcategories', [{
						productId: "1",
						categoryId:"1",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						productId:"1",
						categoryId:"2",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"7",
						categoryId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"2",
						categoryId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"2",
						categoryId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"8",
						categoryId:"1",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"3",
						categoryId:"4",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"3",
						categoryId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"9",
						categoryId:"6",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"4",
						categoryId:"1",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"4",
						categoryId:"6",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"10",
						categoryId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"5",
						categoryId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"5",
						categoryId:"6",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"11",
						categoryId:"2",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"6",
						categoryId:"4",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"6",
						categoryId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"12",
						categoryId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('productcategories', null, {});
  }
};
