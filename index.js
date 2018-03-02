const express = require('express');
const index = express();
const expressHandlebars = require('express-handlebars');
const recipes = require('./controllers/recipes');

// handlebars
const handlebarsOptions = { defaultLayout: 'main' };
const handlebarsConfig = expressHandlebars(handlebarsOptions);
index.engine('handlebars', handlebarsConfig);
index.set('view engine', 'handlebars');
// index.engine('handlebars', expressHandlebars({defaultLayout: 'main'})); ugyanaz, mint a fentebbi 4 sor, csak szétszedtük az érthetőség kedvéért.

// logger
const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

index.use(logger);
index.use('/recipes', recipes);

// LISTENER
index.listen(8081, () => {
  console.log('Listening on port 8081');
});
