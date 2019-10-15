'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'webtoons',
      [
        {
          title: 'True Beauty',
          genre: 'Drama',
          isFavorite: false,
          image:
            'https://swebtoon-phinf.pstatic.net/20180815_248/1534306366090Kre04_JPEG/10_EC8DB8EB84A4EC9DBC_ipad.jpg',
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
          createdBy: 1,
        },
        {
          title: 'Age Matters',
          genre: 'Romance',
          isFavorite: false,
          image: 'https://i.ytimg.com/vi/9e42OD0FxBg/maxresdefault.jpg',
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
          createdBy: 1,
        },
        {
          title: 'A Good Day to be a Dog',
          genre: 'Drama',
          isFavorite: true,
          image:
            'https://swebtoon-phinf.pstatic.net/20180904_277/1536059595536c1T81_JPEG/thumb_ipad.jpg',
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
          createdBy: 1,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
