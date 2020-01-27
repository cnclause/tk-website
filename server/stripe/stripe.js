var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.get('/charge', (req, res, next) => {
  (async () => {
    const charge = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: 'tok_visa',
      receipt_email: 'jenny.rosen@example.com',
    });
  })();
})


module.exports = router;
