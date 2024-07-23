const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});


app.post("/payment/create", async(req, res)=>{
    const total = parseInt(req.query.total);
    if (total > 0) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd",
            });
            res.status(200).json({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            console.error("Error creating payment intent:", error);
            res.status(500).json({ error: "Failed to create payment intent" });
        }
    } else {
        res.status(400).json({ error: "Total amount must be greater than zero" });
    }
    
})

exports.api = onRequest(app);
