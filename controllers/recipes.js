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
  recipesModel.create({recipename: req.body.recipename});
  res.redirect('/recipes');
});

/*
// get edit form
recipes.get('/:id/edit', (req, res) => {
  let id = parseInt(req.params.id);
  let tempResponse = {id: id, action: 'edit', success: true};
  res.json(tempResponse);
});
*/

// update recipe
recipes.put('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let newName = req.query.newname;
  let updatedRecipe = recipesModel.update(id, newName);
  res.json(updatedRecipe);
});

// delete recipe
recipes.delete('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let deletedRecipe = recipesModel.destroy(id);
  res.json(deletedRecipe);
});

module.exports = recipes;
