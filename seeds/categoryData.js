const { Category } = require('../models');

const categorydata = [
  {
    name: 'Dogs',
  },
  {
    name: 'Cats',
  },
];


const seedCategory = () => Category.bulkCreate(categorydata);
module.exports = seedCategory;
