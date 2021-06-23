const { Adopter } = require('../models');

const adopterdata = [
  {
    adoption_date: '2021-06-19',
    user_id: 1,
    adopter_name:"Juan Pérez"
  },
  {
    adoption_date: '2021-06-21',
    user_id: 2,
    adopter_name:"Jhon Doe"    
  },
];

const seedAdopter = () => Adopter.bulkCreate(adopterdata);
module.exports = seedAdopter;
