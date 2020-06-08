const express = require('express');
const router = express.Router();

const MailController = require('../controllers/mail.controller');

router.get('/api/mail', MailController.getMails);

router.post('/api/mail', MailController.sendMail);

router.put('/api/mail/:id', MailController.updateMail);

router.delete('/api/mail/:id', MailController.deleteMail);
// Create a route to stop the scheduler.
module.exports = router;