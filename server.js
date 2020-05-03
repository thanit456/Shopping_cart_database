// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/shopping_cart";

// https://zellwk.com/blog/crud-express-mongodb/

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const MongoClient = require("mongodb").MongoClient;

const connectionString = "";

MongoClient.connect(connectionString, {
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Connected to database");

    const db = client.db("shopping-cart");
    const itemsCollection = db.collection("items");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // ? Maybe it doesn't have to use
    app.use(express.static("public"));
    app.set("view engine", "ejs");

    app.get("/", (req, res) => {
      itemsCollection
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
        })
        .catch((error) => console.error(error));
      res.render("index.ejs");
    });

    app.post("/items", (req, res) => {
      itemsCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
    });

    app.put("/items", (req, res) => {
      itemsCollection
        .findOneAndUpdate(
          { name: req.body.name },
          {
            $set: {
              amount: req.body.amount,
              price_baht: req.body.price_baht,
              description: req.body.description,
              image_url: req.body.image_url,
            },
          },
          {
            upsert: true,
          }
        )
        .then((res) => {
          console.log(res);
          res.json("PUT change_price Success");
        })
        .catch((error) => console.error(error));
    });

    app
      .delete("/items", (req, res) => {
        /*
      itemsCollection.remove({
        { name: req.body.name },
        options
      });
      */
        itemsCollection.deleteOne({ name: req.body.name });
      })
      .then((res) => {
        console.log(res);
        res.json(`Deleted an item`);
      })
      .catch((error) => collection.error(error));

    app.listen(3001, () => {
      console.log("listening on 3001");
    });
  })
  .catch((error) => console.error(error));
