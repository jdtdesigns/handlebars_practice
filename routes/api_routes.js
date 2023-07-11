const router = require('express').Router();
const Student = require('../models/Student');
const Group = require('../models/Group');

// Create Group
router.post('/api/group', (clientReq, serverRes) => {
  Group.create({
    name: clientReq.body.name
  }).then(newGroup => {
    serverRes.send('group added successfully!');
  });
});

// Get all groups
router.get('/api/groups', (clientReq, serverRes) => {
  // Retrieve all groups from the db
  Group.findAll()
    .then(groups => {
      serverRes.send(groups);
    });
});

// Create Student


module.exports = router;