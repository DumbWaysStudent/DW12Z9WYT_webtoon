'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'episodes',
      [
        {
          title: 'Ep. 1',
          image:
            'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2019/09/BMGIANT_Cv1_C1-C4_MASSMARKET-1_5d8d667a419622.43748787.jpg?itok=GE5oc-88',
          webtoon_id: 1,
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
        },
        {
          title: 'Ep. 2',
          image:
            'http://talesfromthelongbox.com/theshow/wp-content/uploads/2018/06/Man-of-Steel-2018-001-000.jpg',
          webtoon_id: 1,
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
        },
        {
          title: 'Ep. 3',
          image:
            'https://i.pinimg.com/originals/e7/fd/8c/e7fd8c1d9ecb97090b5109cfc88ee24f.jpg',
          webtoon_id: 1,
          createdAt: '2019-10-10T08:31:21+00:00',
          updatedAt: '2019-10-10T08:31:21+00:00',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
