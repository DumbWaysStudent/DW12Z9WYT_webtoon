const models = require('../models');
const Webtoon = models.webtoon;
const User = models.user;
const Episode = models.episode;
const Page = models.page;

exports.index = (req, res) => {
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

// exports.show = (req, res) => {
//   console.log(req.params.id);

//   Todo.findOne({where: {id: req.params.id}}).then(todo => res.send(todo));
// };

// exports.store = (req, res) => {
//   Todo.create(req.body).then(todo => {
//     res.send({
//       message: 'success',
//       todo,
//     });
//   });
// };

// exports.update = (req, res) => {
//   Todo.update(req.body, {where: {id: req.params.id}}).then(todo => {
//     res.send({
//       message: 'success',
//       todo,
//     });
//   });
// };

// exports.delete = (req, res) => {
//   Todo.destroy({where: {id: req.params.id}}).then(todo => {
//     res.send({
//       message: 'success',
//       todo,
//     });
//   });
// };

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
