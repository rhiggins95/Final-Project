const express = require("express");
const router = express.Router();

if (process.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", (req, res) => {
  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount: amount,
    currency: "usd"
  };
  stripe.charges.create(body, (error, data) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
