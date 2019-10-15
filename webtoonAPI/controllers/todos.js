const models = require('../models');
const Webtoon = models.webtoon;
const User = models.user;

// exports.index = (req, res) => {
//   Todo.findAll({
//     include: [
//       {
//         model: User,
//         as: "createdBy"
//       }
//     ]
//   }).then(todos => res.send(todos));
// };

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

exports.show = (req, res) => {
  console.log(req.params.id);

  Todo.findOne({where: {id: req.params.id}}).then(todo => res.send(todo));
};

exports.store = (req, res) => {
  Todo.create(req.body).then(todo => {
    res.send({
      message: 'success',
      todo,
    });
  });
};

exports.update = (req, res) => {
  Todo.update(req.body, {where: {id: req.params.id}}).then(todo => {
    res.send({
      message: 'success',
      todo,
    });
  });
};

exports.delete = (req, res) => {
  Todo.destroy({where: {id: req.params.id}}).then(todo => {
    res.send({
      message: 'success',
      todo,
    });
  });
};
