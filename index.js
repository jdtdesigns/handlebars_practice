const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('student_app_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

class Student extends Model { }

Student.init({
  // Model attributes are defined here
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize: sequelize, // We need to pass the connection instance
  modelName: 'student' // We need to choose the model name
});

// 
sequelize.sync()
  .then(() => {
    console.log('db has synced!');

    // Student.create({
    //   first_name: 'Jamil',
    //   last_name: 'Barret'
    // }).then((newStudent) => {
    //   console.log(newStudent);
    // });


    Student.findByPk(1)
      .then(student => {
        console.log(student);
      })
  });

