const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedPets = require('./petData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedPets();

  process.exit(0);
};

seedAll();
