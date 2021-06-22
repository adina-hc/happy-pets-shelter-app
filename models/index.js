const User = require('./User');
const Category = require('./Category');
const Pet = require('./Pet');
const Adopter = require('./Adopter');

// Category.hasMany(Pet, {
//   foreignKey: 'category_id',
// });

// Pet.belongsTo(Category, {
//   foreignKey: 'category_id',
// });

// Adopter.hasMany(Pet, {
//   foreignKey: 'adoption_id',
// });

// Pet.belongsTo(Adopter, {
//   foreignKey: 'adoption_id',
// });

// // Adoption relationship
// User.hasMany(Adopter, {
//   foreignKey: 'user_id',
// });

// Adopter.belongsTo(User, {
//   foreignKey: 'user_id',
// });

module.exports = { User, Category, Pet, Adopter };
