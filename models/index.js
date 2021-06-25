const User = require('./User');
const Category = require('./Category');
const Pet = require('./Pet');

Category.hasMany(Pet, {
  foreignKey: 'category_id',
});

Pet.belongsTo(Category, {
  foreignKey: 'category_id',
});

User.hasMany(Pet, {
  foreignKey: 'user_id',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Category, Pet };
