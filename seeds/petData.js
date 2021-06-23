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
    filename:"solovino.jpg",
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
    filename:"silvester.jpg",
    adoption_id: 2,        
  },  
];

const seedPets = () => Pet.bulkCreate(petdata);
module.exports = seedPets;
