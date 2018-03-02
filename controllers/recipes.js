const express = require('express');
const recipes = express();

const recipesModel = require('../models/recipe');

// index
recipes.get('/', (req, res) => {
  let recipesDatabase = recipesModel.getAll();
  res.locals.recipesDatabase = recipesDatabase; // beletöltjük a recipesDatabase-t a res.locals objektumba
  res.render('recipes/index');                  // beletsszük az index.hb-be: {{recipesDatabase}}
});

// show recipe
recipes.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let recipe = recipesModel.get(id);
  res.json(recipe);
});

/*
// get new recipe form
recipes.get('/:id/new', (req, res) => {
  let id = parseInt(req.params.id);
  let tempResponse = {id: id, action: 'new', success: true};
  res.json(tempResponse);
});
*/

// create recipe
recipes.post('/', (req, res) => {
  let createdRecipe = recipesModel.create(req.query.recipename);
  res.json(createdRecipe);
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
