const express = require('express');
const index = express();

const recipes = require('./controllers/recipes');

// logger
const logger = (req, res, next) => {
  console.log(req.method);
  next();
};

index.use(logger);
index.use('/recipes', recipes);

// LISTENER
index.listen(8081, () => {
  console.log('Listening on port 8081');
});
