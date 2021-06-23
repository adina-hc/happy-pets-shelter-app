const { User } = require('../models');

const userdata = [
  {
    username: 'juan',
    email: "juan@yahoo.com",    
    password: "juan",    
  },
  {
    username: 'jhon',
    email: "jhon@yahoo.com",    
    password: "jhon",        
  },
];

const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;
