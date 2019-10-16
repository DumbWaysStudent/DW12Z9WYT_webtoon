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
  router.get('/webtoons', authenticated, TodosController.index);
  // Get all episodes of a webtoon
  router.get('/webtoon/:id_webtoon/episodes', TodosController.getToonEps);
  // Get all pages of an episode
  router.get(
    '/webtoon/:id_webtoon/episode/:id_episode',
    TodosController.getToonPages,
  );
  // Favorite pages
  router.get(
    '/webtoons?isFavorite=true',
    authenticated,
    TodosController.getFav,
  );
  // Search Webtoon
  router.get('/webtoons/title=:title', TodosController.search);

  // Private API
  // Get all webtoons/favs
  //router.get('/webtoons', TodosController.getAllToons);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
