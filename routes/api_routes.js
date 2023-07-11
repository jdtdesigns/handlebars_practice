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

module.exports = router;