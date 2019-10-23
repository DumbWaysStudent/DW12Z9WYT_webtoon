"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "episodes",
      [
        {
          webtoonsid: 1,
          episode: "The Darn Knight",
          image:
            "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/751487/751487._SX1280_QL80_TTD_.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoonsid: 2,
          episode: "Autism",
          image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/728105.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoonsid: 3,
          episode: "Barf barf",
          image:
            "http://www.deadcanarycomics.com/wp-content/uploads/2017/10/9780995457218.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("episodes", null, {});
  }
};
