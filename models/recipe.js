let recipesDB = [
  { id: 0, recipename: 'Palacsinta', description: 'nagyon finom' },
  { id: 1, recipename: 'Kakaóscsiga', description: 'hmmmm' },
  { id: 2, recipename: 'Húsleves', description: 'anyám féle' },
  { id: 3, recipename: 'Csirke curry', description: 'taj mahal' }
];

let recipeCounter = 4;

const getAll = () => {
  return recipesDB;
};

const get = (id) => {
  return recipesDB.find((recipe) => {
    return recipe.id === id;
  });
};

const create = (recipeObj) => {
  let newRecipe = {
    id: recipeCounter,
    recipename: recipeObj.recipename,
    description: recipeObj.description
  };
  recipesDB.push(newRecipe);
  recipeCounter++;
  return newRecipe;
};

const update = (id, newname, newdescr) => {
  let recipeToUpdate = get(id);
  recipeToUpdate.recipename = newname;
  recipeToUpdate.description = newdescr;
  return recipeToUpdate;
};

const destroy = (id) => {
  let recipeToDelete = get(id);
  let index = recipesDB.indexOf(recipeToDelete);
  recipesDB.splice(index, 1);
  return recipeToDelete;
};

/*
const search = (searchInput) => {
  console.log('valami');
  if (recipesDB.includes(searchInput)) {
    console.log('ez jo');
    return recipesDB.indexOf(searchInput);
  } else {
    console.log('not found');
  }
};
*/

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  update: update,
  destroy: destroy
  // search: search
};
