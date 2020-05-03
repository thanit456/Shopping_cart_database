const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./app/routes/cart.routes");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Database configuration
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

/////
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
