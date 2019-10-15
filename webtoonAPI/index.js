const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;

app.use(bodyParser.json());

//controllers
const AuthController = require('./controllers/auth');
const TodosController = require('./controllers/todos');

//middlewares
const {authenticated} = require('./middleware');

app.group('/api/v1', router => {
  //auth API
  router.post('/login', AuthController.login);
  router.post('/register', AuthController.register);

  //todos API
  router.get('/webtoons', TodosController.index);
  // Get all episodes of a webtoon
  router.get('/webtoon/:id_webtoon/episodes', TodosController.getToonEps);
  // router.get('/todo/:id', TodosController.show);
  // router.post('/todo', authenticated, TodosController.store);
  // router.patch('/todo/:id', authenticated, TodosController.update);
  // router.delete('/todo/:id', authenticated, TodosController.delete);

  //another APIs goes here
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
