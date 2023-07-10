const router = require('express').Router();
const Student = require('../models/Student');

// localhost:3333/blah/api/test
router.get('/api/test', (clientReq, serverRes) => {
  serverRes.send('test works!');
});

module.exports = router;