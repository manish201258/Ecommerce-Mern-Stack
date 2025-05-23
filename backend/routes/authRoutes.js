const router = require('express').Router();
const {registerUser , loginUser} = require('../controllers/authControllers');

// Register route
router.post("/register", registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;