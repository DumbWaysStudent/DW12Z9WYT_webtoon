'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pages', [
      {
        page: 1,
        image:
          'https://cafart.r.worldssl.net/images/Category_120629/subcat_182493/d6tGJAap_130619114513lola.jpg',
        episode_id: 1,
        webtoon_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 2,
        image:
          'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3585944/FINAL_comic_page_Painter.jpg',
        episode_id: 1,
        webtoon_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 3,
        image:
          'https://simonkneebone.files.wordpress.com/2014/06/comic-lr-page.jpg',
        episode_id: 1,
        webtoon_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pages', null, {});
  },
};
