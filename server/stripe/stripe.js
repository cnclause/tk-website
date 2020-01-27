var express = require('express');
var router = express.Router();
const stripe = require('stripe')('sk_test_f73VuavWFDH4oM4gcKNZAaU2')

router.post('/charge', (req, res) => {
  (async () => {
    const charge = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: 'tok_visa',
      receipt_email: 'jenny.rosen@example.com',
    });
    res.json(charge)
  })()
})

router.post('/paymentIntent', (req, res) => {
  (async () => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: 'jenny.rosen@example.com',
    });
    res.json(paymentIntent)
  })();
})


module.exports = router;
