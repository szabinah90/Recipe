module.exports = (sequelize, DataTypes) => {
  var recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    difficulty: DataTypes.ENUM('easy', 'medium', 'hard'),
    ingredients: DataTypes.STRING,
    origin: DataTypes.STRING,
    gluten_free: DataTypes.BOOLEAN,
    student_id: DataTypes.INTEGER
  }, {});
  /*
  recipe.associate = function(models) {
    // associations can be defined here
  };
  */
  return recipe;
};
