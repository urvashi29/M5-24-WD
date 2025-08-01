// routes/auth.js
const express = require('express');
const router = express.Router(); 
const { registerUser, loginUser } = require('../controller/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;  // Export the router