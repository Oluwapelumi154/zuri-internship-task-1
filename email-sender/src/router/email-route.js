const express = require('express');

const { sendMailToUser } = require('../controller');
const { validate } = require('../schema');
const { userToSendEmail } = require('../schema/schema');

const router = express.Router();
router.post('/sendMail', validate(userToSendEmail()), sendMailToUser);
module.exports = router;
