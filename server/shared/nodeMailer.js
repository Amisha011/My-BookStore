const nodemailer = require("nodemailer")
const SendingMail = (data, subject, reciever) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'amishaagr011@gmail.com',
      pass: 'amisha011'
    }
  });

  var mailOptions = {
    from: 'bookstore.support',
    to: reciever,
    subject: subject,
    text: data
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = { SendingMail }