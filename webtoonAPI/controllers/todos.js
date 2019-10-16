const models = require('../models');
const Webtoon = models.webtoon;
const User = models.user;
const Episode = models.episode;
const Page = models.page;

exports.index = (req, res) => {
  const {isFavorite} = req.query;
  if (isFavorite == 'true') {
    Webtoon.findAll({
      where: {
        isFavorite: true,
      },
    }).then(webtoon => res.send(webtoon));
  } else if (isFavorite == 'false') {
    Webtoon.findAll({
      where: {
        isFavorite: false,
      },
    }).then(webtoon => res.send(webtoon));
  } else {
    Webtoon.findAll({
      include: [
        {
          as: 'createdBy',
          model: User,
        },
      ],
    }).then(webtoon => res.send(webtoon));
  }
};

exports.getToonEps = (req, res) => {
  const id = req.params.id_webtoon;

  Episode.findAll({
    where: {webtoon_id: id},
    attributes: {exclude: ['id', 'webtoon_id']},
  }).then(data => {
    res.send(data);
  });
};

exports.getToonPages = (req, res) => {
  const webtoonsId = req.params.id_webtoon;
  const epsodeId = req.params.id_episode;

  Page.findAll({
    where: {episode_id: epsodeId, webtoon_id: webtoonsId},
    attributes: {exclude: ['id', 'episode_id', 'webtoon_id']},
  }).then(data => {
    res.send(data);
  });
};

// exports.getFav = (req, res) => {
//   // const favorite = req.query.is_favorite;
//   // console.log(favorite);
//   Webtoon.findAll({
//     where: {isFavorite: true},
//   })
//     .then(webtoon => res.send(webtoon))
//     .catch(err => {
//       console.log(err);
//     });
// };

exports.search = (req, res) => {
  const Title = req.params.title;
  console.log('search');

  Webtoon.findAll({
    where: {title: Title},
  })
    .then(pages => res.send(pages))
    .catch(err => {
      console.log(err);
    });
};

exports.getFav = (req, res) => {
  const favorite = req.query.isFavorite;
  console.log('getFav nyala');
  if (favorite == true) {
    Webtoon.findAll({
      where: {isFavorite: true},
    });
  } else favorite == false;
  Webtoon.findAll({
    where: {isFavorite: false},
  });
};

// exports.getAllToons = (req, res) => {
//   Webtoon.findAll({
//     include: [
//       {
//         model: User,
//         as: 'createdBy',
//         attributes: ['id'],
//       },
//       {
//         model: User,
//         as: 'isFavorite',
//         // attributes: ["id"]
//         // through: {
//         //   model: Favorite,
//         //   where: { user_id: 1 } //Example Logged in user
//         // }
//       },
//     ],
//     attributes: {exclude: ['genre', 'created_by']},
//   }).then(data => {
//     let newData;

//     if (req.query.is_favorite == 'true') {
//       newData = getFavToons(data);
//     } else {
//       newData = getToons(data);
//     }
//     res.send(newData);
//   });
// };

// // Get all webtoons
// const getToons = data => {
//   const newData = data.map(item => {
//     let newItem = {
//       title: item.title,
//       genre: item.genre,
//       isFavorite: item.isFavorite.length ? true : false,
//       image: item.image,
//       createdAt: item.createdAt,
//       updatedAt: item.updatedAt,
//       createdBy: item.createdBy.id,
//     };
//     return newItem;
//   });
//   return newData;
// };

// // Get all favorite webtoons
// const getFavToons = data => {
//   const input = data.filter(item => {
//     return item.isFavorite.length > 0;
//   });
//   let newData = input.map(item => {
//     let newItem = {
//       title: item.title,
//       genre: item.genre,
//       isFavorite: item.isFavorite.length ? true : false,
//       image: item.image,
//       createdAt: item.createdAt,
//       updatedAt: item.updatedAt,
//     };
//     return newItem;
//   });
//   return newData;
// };
