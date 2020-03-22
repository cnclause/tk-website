var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.post('/charge', (req, res, next) => {
  (async () => {
    // let amount = Math.floor(req.body.amount * 100)
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      // source: 'tok_visa',
      // receipt_email: 'jenny.rosen@example.com',
      card: req.body.token
    });
    const responseObject = {
      'status': 'success',
      'charge': charge 
    };
    res.json(responseObject);
  })();
})


module.exports = router;
