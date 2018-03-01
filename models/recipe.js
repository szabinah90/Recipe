let recipesDB = [];
let recipeCounter = 0;

const getAll = () => {
  return recipesDB;
};

const get = (id) => {
  return recipesDB.find((recipe) => {
    return recipe.id === id;
  });
};

const create = (recipename) => {
  let newRecipe = {
    id: recipeCounter,
    recipename: recipename
  };
  recipesDB.push(newRecipe);
  recipeCounter++;
  return newRecipe;
};

const update = (id, newname) => {
  let recipeToUpdate = get(id);
  recipeToUpdate.recipename = newname;
  return recipeToUpdate;
};

const destroy = (id) => {
  let recipeToDelete = get(id);
  let index = recipesDB.indexOf(recipeToDelete);
  recipesDB.splice(index, 1);
  return recipeToDelete;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  update: update,
  destroy: destroy
};
