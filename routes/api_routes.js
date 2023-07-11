const router = require('express').Router();
const Student = require('../models/Student');
const Group = require('../models/Group');

// Create Group
router.post('/api/group', (clientReq, serverRes) => {
  Group.create({
    name: clientReq.body.name
  }).then(newGroup => {
    serverRes.send({
      message: 'Group added successfully!'
    });
  }).catch(err => {
    serverRes.send({
      message: err.message,
      error: true
    });
  });
});

// Get all groups
router.get('/api/groups', (clientReq, serverRes) => {
  // Retrieve all groups from the db
  Group.findAll({
    include: {
      model: Student,
      order: [['createdAt', 'DESC']]
    }
  }).then(groups => {
    serverRes.send(groups);
  });
});

// Create Student
router.post('/api/student', (clientReq, serverRes) => {
  Student.create(clientReq.body)
    .then(() => serverRes.send('Student added!'));
});


module.exports = router;