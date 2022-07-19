const { sendEmail } = require('./send-mail');
const { template } = require('./mail-template');
module.exports = Object.freeze({
  sendEmail,
  template
});
