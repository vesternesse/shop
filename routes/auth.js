const express = require('express');
const router = express.Router();
const authController = require('../src/controllers/authController')

router.get('/login',authController.loginForm);

router.post('/login', authController.loginAuth);

router.get('/register', authController.registerForm);

router.post('/register', authController.registerUser);

module.exports = router;