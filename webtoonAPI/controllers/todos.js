const models = require('../models');
const Sequelize = require('sequelize');
const Webtoon = models.webtoon;
const User = models.user;
const Episode = models.episode;
const Page = models.page;
const Op = Sequelize.Op;

(exports.index = (req, res) => {
  const {isFavorite, title} = req.query;
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
  } else if (title) {
    Webtoon.findAll({
      where: {
        title: {[Op.like]: `%${title}%`},
      },
    }).then(webtoon => res.send(webtoon));
  } else {
    Webtoon.findAll().then(webtoon => res.send(webtoon));
  }
}),
  (exports.getToonEps = (req, res) => {
    const id = req.params.id_webtoon;

    Episode.findAll({
      where: {webtoon_id: id},
      attributes: {exclude: ['id', 'webtoon_id']},
    }).then(data => {
      res.send(data);
    });
  });

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

exports.getFav = (req, res) => {
  // const favorite = req.query.is_favorite;
  // console.log(favorite);
  Webtoon.findAll({
    where: {isFavorite: true},
  })
    .then(webtoon => res.send(webtoon))
    .catch(err => {
      console.log(err);
    });
};

exports.user = (req, res) => {
  const {user_id} = req.params;
  Webtoon.findAll({
    include: [
      {
        model: User,
        as: 'created_by',
        attributes: ['id'],
      },
    ],
    where: {createdBy: user_id},
  })
    .then(webtoon => res.send(webtoon))
    .catch(err => {
      console.log(err);
    });
};

exports.storeToon = (req, res) => {
  const user_id = req.params.user_id;

  Webtoon.create({
    title: req.body.title,
    genre: req.body.genre,
    isFavorite: req.body.isFavorite,
    image: req.body.image,
    createdBy: user_id,
  })
    .then(webtoon => res.send(webtoon))
    .catch(err => {
      console.log(err);
    });
};

exports.editMyToon = (req, res) => {
  const user_id = req.params.user_id;
  const toonId = req.params.webtoon_id;
  console.log('user id ke:' + user_id + ' ' + 'webtoon_id ke' + toonId);

  Webtoon.update(
    {
      title: req.body.title,
      genre: req.body.genre,
      isFavorite: req.body.isFavorite,
      image: req.body.image,
      createdBy: user_id,
    },
    {where: {id: toonId}},
  )
    .then(webtoon => res.send(webtoon))
    .catch(err => {
      console.log(err);
    });
};

exports.deleteMyToon = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.webtoon_id;

  Webtoon.destroy({
    where: {createdBy: userId, id: toonId},
  }).then(deletedRow => {
    res.status(200).json({id: deletedRow});
  });
};
