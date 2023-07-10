const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');

// Create our Student Model and extend the Model contructor
class Group extends Model { }

// Initialize our table, using the init() method
Group.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 2
    }
  }
}, {
  sequelize: db,
  modelName: 'group'
});

module.exports = Group;

