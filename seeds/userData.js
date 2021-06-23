const { User } = require('../models');

const userdata = [
  {
    username: 'seed',
    email: "seed@yahoo.com",    
    password: "seed",        
    name: "seed",        
    lastname: "seed",        
  },
];

const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;
