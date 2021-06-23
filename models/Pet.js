const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    found_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    size: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Shelter',
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    cage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    adoption_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'adopter',
        key: 'id',
      }
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
    timestamps: false,
  }
);

module.exports = Pet;
