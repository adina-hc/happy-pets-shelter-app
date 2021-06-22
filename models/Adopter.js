// Import required connections
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Adoptions table (kardex) to populate when user selects a pet
class Adopter extends Model {}

Adopter.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        },
        adoption_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
        },
        adopter_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },   
    },
},
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'adopter',
      }
);

module.exports = Adopter;