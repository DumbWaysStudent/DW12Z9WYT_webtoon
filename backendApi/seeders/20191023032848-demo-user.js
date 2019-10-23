"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: "rizky@ari.com",
          password: "12345",
          name: "rizky",
          avatar:
            "https://cdn6.f-cdn.com/contestentries/356813/18629870/56c8c4a2662a0_thumb900.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "test@test.com",
          password: "54321",
          name: "test",
          avatar: "https://image.flaticon.com/icons/png/512/64/64572.png",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
