const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.post('/api/login', AuthController.login);

router.post('/api/signup', AuthController.signup);

router.get('/api/logout', AuthController.logout);

module.exports = router;