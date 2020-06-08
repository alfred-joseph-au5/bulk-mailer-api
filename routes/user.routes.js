const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

router.get('/api/profile', UserController.getProfileInfo);

router.post('/api/profile', UserController.createProfile);

router.put('/api/profile/:email', UserController.updateProfile);

router.delete('/api/profile/:email', UserController.deleteProfile);

module.exports = router;