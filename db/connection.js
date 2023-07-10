const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_app_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;