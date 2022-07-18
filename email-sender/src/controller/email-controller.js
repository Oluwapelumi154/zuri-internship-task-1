const { sendEmail } = require('../../utils');

exports.sendMailToUser = async (req, res) => {
  const { body } = req;
  try {
    await sendEmail({
      from: 'Automated Email Testing',
      to: body.email,
      subject: 'Welcome Automated Email Testing',
      text: body.message
    });
    return res.status(200).json({
      status: 'success',
      message: 'Mail Sent Successfully'
    });
  } catch (err) {
    return res.status(500).json({
      status: 'fail',
      err: err.message,
      message: 'There was an error sending the email'
    });
  }
};
