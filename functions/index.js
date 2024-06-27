const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { Payment } = require("@mui/icons-material");
const stripe = require("stripe")(
  "sk_test_51PW7PxFTqaovi8uZp6QX0NEMYMMJze7Anok48yCJOdXDk70wW4TFdSNJBzQD8FX2J69DXS5pOXlVHvL1gIP93clr00cAtEQ3CO"
);

// - API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //If okay created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - Listen Commands
exports.api = functions.https.onRequest(app);
