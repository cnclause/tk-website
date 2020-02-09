var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.get('/charge', (req, res, next) => {
  console.log(req.body.token)
  (async () => {
    let amount = Math.floor(req.body.amount * 100)
    console.log(req.body.token)
    const charge = await stripe.charge.create({
      amount: amount,
      currency: 'usd',
      // source: 'tok_visa',
      // receipt_email: 'jenny.rosen@example.com',
      card: req.body.token
    });
    const responseObject = {
      'status': 'success',
      'charge': charge 
    };
    return responseObject;
  })();
})


module.exports = router;
