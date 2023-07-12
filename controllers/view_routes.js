const router = require('express').Router();

// Show Homepage
router.get('/', (req, res) => {
  res.render('index', {
    isHome: true
  });
});

// Show Register Page
router.get('/register', (req, res) => {
  res.render('register', {
    isRegister: true
  });
});

// Show Dashboard Page
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;