const express = require("express");
const bodyParser = require("body-parser");
const emailService = require("./services/email-service");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/ipn", (req, res) => {
  emailService(req.body);
  // Required for successful handshake with the Paypal IPN service
  res.status(200).send("OK");
});

app.listen(port, () =>
  console.log(`Paypal IPN app listening on port ${port}!`)
);
