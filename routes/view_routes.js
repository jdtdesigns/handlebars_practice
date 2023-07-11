const router = require('express').Router();
const path = require('path');

// Show group form view
router.get('/group', (clientReq, serverRes) => {
  serverRes.sendFile(path.join(__dirname, '../views/group_form.html'));
});

// Show student form view
router.get('/student', (clientReq, serverRes) => {
  serverRes.sendFile(path.join(__dirname, '../views/student_form.html'));
});


module.exports = router;