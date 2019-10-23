"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "webtoons",
      [
        {
          title: "Badman",
          genre: "Romance",
          image:
            "https://imgix-media.wbdndc.net/cms/filer_public/f2/b8/f2b84d79-d939-4272-90dd-11ab2be42aa6/batbooks-header.jpg",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Spawn",
          genre: "Comedy",
          image:
            "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/06/spawn_301_cover.jpg",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "A Good Day to be a Dog",
          genre: "Drama",
          image:
            "http://www.warrocketajax.com/wp-content/uploads/2019/10/ag1kew6a.jpeg",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("webtoons", null, {});
  }
};
