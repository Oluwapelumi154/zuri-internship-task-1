const { body } = require('express-validator');

module.exports = Object.freeze({
  userToSendEmail: () => [
    body('email')
      .isEmail()
      .withMessage('Invalid Email')
      .notEmpty()
      .withMessage('Email is a required field'),
    body('message')
      .isString()
      .withMessage('Message must be a string')
      .notEmpty()
      .withMessage('Message is a required field')
  ]
});
