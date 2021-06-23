const { Pet } = require('../models');

const petdata = [
  {
    name: 'Solovino',
    color: 'Black',
    found_date: '2021-06-19',
    size: 35,
    category_id: 1,
    cage:1,
    filename:"solovino.jpg",
    user_id: 1,    
    adoption_date: '2021-01-01',
  },
  {
    name: 'Silvester',
    color: 'Black',
    found_date: '2021-06-21',
    size: 50,
    category_id: 2,
    cage:2,
    filename:"silvester.jpg",
    user_id: 1, 
    adoption_date: '2021-01-01',        
  },  
];

const seedPets = () => Pet.bulkCreate(petdata);
module.exports = seedPets;
