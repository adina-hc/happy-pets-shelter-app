const { Pet } = require('../models');

const petdata = [
  {
    name: 'Solovino',
    color: 'Black',
    found_date: '2021-06-19',
    size: 35,
    status: 'Available',
    category_id: 1,
    cage:1,
    filename:"01-blossoming-apricot.jpg",
    adoption_id: 1,    
  },
  {
    name: 'Silvester',
    color: 'Black',
    found_date: '2021-06-21',
    size: 50,
    status: 'Available',
    category_id: 2,
    cage:2,
    filename:"02-cosmos-flowers.jpg",
    adoption_id: 2,        
  },  
];

const seedPets = () => Pet.bulkCreate(petdata);
module.exports = seedPets;
