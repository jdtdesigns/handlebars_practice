const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');

class User extends Model { }

User.init({
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      min: 6
    }
  }
}, {
  sequelize: db,
  modelName: 'user'
});

module.exports = User;