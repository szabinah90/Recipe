const express = require('express');
const recipes = express();

const models = require('../models');

// index
recipes.get('/', (req, res) => {
  models.recipe.findAll().then(recipes => {
    res.locals.recipesDatabase = recipes;
    res.render('recipes/index');
  });
});

// get new recipe form
recipes.get('/new', (req, res) => {
  res.render('recipes/new');
});

// show recipe
recipes.get('/:id', (req, res) => {
  models.recipe.findById(req.params.id).then(recipe => {
    res.locals.recipe = recipe;
    res.render('recipes/show');
  });
});

// create recipe
recipes.post('/', (req, res) => {
  models.recipe.create({name: req.body.name, description: req.body.description}).then(recipe => {
    res.redirect('/recipes');
  });
});

// get edit form
recipes.get('/:id/edit', (req, res) => {
  models.recipe.findById(req.params.id).then(recipe => {
    res.locals.recipe = recipe;
    res.render('recipes/edit');
  });
});

// update recipe
recipes.put('/:id', (req, res) => {
  models.recipe.update({name: req.body.name, description: req.body.description}, {where: {id: req.params.id}}).then(recipe => {
    res.redirect('/recipes');
  });
});

// delete recipe
recipes.delete('/:id', (req, res) => {
  models.recipe.findById(req.params.id).then(recipe => {
    recipe.destroy().then(() => {
      res.redirect('/recipes');
    });
  });
});

/* index & search:
beletöltjük a recipesDatabase-t a res.locals objektumba
a recipes (ugyanaz a neve, mint a kontrollernek!) mappában lévő index.hb-t rendereljük,
ezért bele kell tenni a recipesDatabaset: {{recipesDatabase}}

recipes.get('/', (req, res) => {
  let recipesDatabase;
  if (req.query.q) {
    res.locals.search = req.query.q;
    recipesDatabase = recipesModel.search(req.query.q);
  } else {
    recipesDatabase = recipesModel.getAll();
  }
  res.locals.recipesDatabase = recipesDatabase;
  res.render('recipes/index');
});
*/

module.exports = recipes;
