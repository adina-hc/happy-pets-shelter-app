const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedPets = require('./petData');
const seedAdopter = require('./adopterData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();
  
  await seedUsers();

  await seedAdopter();  

  await seedPets();
  process.exit(0);
};

seedAll();
