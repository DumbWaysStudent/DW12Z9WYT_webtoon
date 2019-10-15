const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const models = require('../models');
const User = models.user;

exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const email = req.body.email;
  const password = req.body.password; //use encryption in real world case!

  User.findOne({where: {email, password}}).then(user => {
    const authorization = bcrypt.compareSync(password, user.password);
    if (user) {
      const token = jwt.sign({userId: user.id}, 'my-secret-key');
      res.send({
        email: user.email,
        token,
      });
    } else {
      res.send({
        error: true,
        message: 'Wrong Email or Password!',
      });
    }
  });
};

exports.register = (req, res) => {
  //const email = req.body.email;
  //const password = req.body.password
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({email: req.body.email, password: hashedPassword}).then(user => {
    const token = jwt.sign({userId: user.id}, 'my-secret-key');

    res.send({
      email: user.email,
      token,
    });
  });
};
