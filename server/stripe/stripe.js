var express = require('express');
var router = express.Router();
const stripe = require('stripe')('sk_test_f73VuavWFDH4oM4gcKNZAaU2')

router.post('/charge', (req, res) => {
  (async () => {
    console.log('request', req.body)
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      source: 'tok_visa',
      receipt_email: req.body.email,
    });
    res.json(charge)
  })()
})

router.post('/paymentIntent', (req, res) => {
  (async () => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: req.body.receipt_email,
    });
    res.json(paymentIntent)
  })();
})


module.exports = router;
