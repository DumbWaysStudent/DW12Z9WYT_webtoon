const models = require('../models');
const Webtoon = models.webtoon;
const User = models.user;
const Episode = models.episode;
const Page = models.page;

exports.index = (req, res) => {
  console.log('ini index');

  Webtoon.findAll({
    include: [
      {
        model: User,
        as: 'created_by',
        attributes: ['id'],
      },
    ],
  }).then(webtoon => res.send(webtoon));
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
