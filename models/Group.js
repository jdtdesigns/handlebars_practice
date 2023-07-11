const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');
const Student = require('./Student');

// Create our Student Model and extend the Model contructor
class Group extends Model { }

// Initialize our table, using the init() method
Group.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Group name is already in use.'
    },
    validate: {
      min: 2
    }
  }
}, {
  sequelize: db,
  modelName: 'group'
});

Group.hasMany(Student);
Student.belongsTo(Group);

module.exports = Group;

