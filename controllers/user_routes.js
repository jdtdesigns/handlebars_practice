const router = require('express').Router();
const User = require('../models/User');


router.post('/register', async (req, res) => {
  const newUser = await User.create(req.body);

  res.redirect('/dashboard');
});

module.exports = router;