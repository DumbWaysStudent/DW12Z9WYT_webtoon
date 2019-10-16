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
  // Get my creation
  router.get('/user/:user_id/webtoons', authenticated, TodosController.user);
  // Post created toon
  router.post(
    '/user/:user_id/webtoon',
    authenticated,
    TodosController.storeToon,
  );
  // Update my created toon
  router.put(
    '/user/:user_id/webtoon/:webtoon_id',
    authenticated,
    TodosController.editMyToon,
  );
  // Delete my toon
  router.delete(
    '/user/:user_id/webtoon/:webtoon_id',
    authenticated,
    TodosController.deleteMyToon,
  );
  // Post an episode of a toon
  router.post(
    '/user/:user_id/webtoon/:webtoon_id/episode',
    authenticated,
    TodosController.createEpiToon,
  );
  //Edit detail my episode
  router.put(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id',
    TodosController.updateEpi,
  );
  // Get all images of an episode
  router.get(
    '/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images',
    authenticated,
    TodosController.showImgEps,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
