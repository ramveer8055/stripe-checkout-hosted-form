const express = require('express');
require("dotenv").config();
const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 4242;

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

// database
const db = require('./models');

app.post('/create-checkout-session', async (req, res) => {

  const stripe = require('stripe')(STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    line_items: [
      { price: 'price_1M9671SCsJ4hXY5DJrJyrVJh', quantity: 1 },
    ],
    mode: 'payment',
  });

  //Add a Transaction details
  db.transactions.create({
    payment_id: session.id,
    item_name: "Gold Special",
    amount_total: session.amount_total,
    currency: session.currency,
    mode: session.mode,
    payment_status: session.payment_status
  })

  res.redirect(303, session.url);

});

app.post('/gateway/webhook', async (req, res) => {
  let payment_id = req.body.data.object.id
  let payment_status = req.body.data.object.payment_status
  var data = {
    payment_status: payment_status
  }

  // Update Transaction details
  db.transactions.update(data, {
    where: { payment_id: payment_id }
  })
  res.status(200).send({ message: "success", });

})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});