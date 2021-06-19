const { Category } = require('../models');

const categorydata = [
  {
    name: 'Perros',
  },
  {
    name: 'Gatos',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
