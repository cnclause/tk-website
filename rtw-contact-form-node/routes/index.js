var express = require('express');
var router = express.Router();
require('dotenv').config()

const sgMail = require('@sendgrid/mail');

/* GET home page. */
router.post('/', async function(req, res, next) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    await sgMail.send({
      to: 'cat@timounkontan.org',
      from: 'cat@timounkontan.org',
      reply_to: req.body.email,
      subject: 'Message from FRW',
      text: req.body.message,
    })
  } catch(err){
    console.log(err, 'ERROR ERROR ERROR')
    console.log(err.body.errors, 'ERROR ERROR ERROR')
    // statusCode="500"
  }
});

module.exports = router;
