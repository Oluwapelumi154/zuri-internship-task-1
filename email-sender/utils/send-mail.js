const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({ path: '../.env' });
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

exports.sendEmail = async (options) => {
  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text
  };
  await transporter.sendMail(mailOptions);
};
