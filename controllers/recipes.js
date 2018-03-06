const express = require('express');
const recipes = express();

const recipesModel = require('../models/recipe');

// index
recipes.get('/', (req, res) => {
  let recipesDatabase = recipesModel.getAll();
  res.locals.recipesDatabase = recipesDatabase;
  res.render('recipes/index');
});
/* index:
beletöltjük a recipesDatabase-t a res.locals objektumba
a recipes (ugyanaz a neve, mint a kontrollernek!) mappában lévő index.hb-t rendereljük,
ezért bele kell tenni a recipesDatabaset: {{recipesDatabase}}
*/

// get new recipe form
recipes.get('/new', (req, res) => {
  res.render('recipes/new');
});

// show recipe
recipes.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.locals.indRecipe = recipesModel.get(id);
  res.render('recipes/show');
});

// create recipe
recipes.post('/', (req, res) => {
  recipesModel.create({ recipename: req.body.recipename, description: req.body.description });
  res.redirect('/recipes');
});

// get edit form
recipes.get('/:id/edit', (req, res) => {
  let id = parseInt(req.params.id);
  res.locals.indRecipe = recipesModel.get(id);
  res.render('recipes/edit');
});

// update recipe
recipes.put('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let newName = req.body.recipename;
  let newDescr = req.body.description;
  recipesModel.update(id, newName, newDescr);
  res.redirect('/recipes');
});

// delete recipe
recipes.delete('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  recipesModel.destroy(id);
  res.redirect('/recipes');
});

module.exports = recipes;
