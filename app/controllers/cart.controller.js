const Cart = require("../models/cart.model");

// www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

https: exports.create = (req, res) => {
  if (!req.body.owner_name) {
    return res.status(400).send({
      message: "No the owner name in database",
    });
  }

  const cart = new Cart({
    owner_name: req.body.owner_name,
    items: [],
  });

  cart
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Some errors occured while creating the Cart`,
      });
    });
};

exports.findAll = (req, res) => {
  Cart.find()
    .then((cart) => {
      res.send(cart);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Some errors occured while retrieving cart`,
      });
    });
};

exports.findOne = (req, res) => {
  Cart.findById(req.params.owner_name)
    .then((cart) => {
      if (!cart) {
        return res.status(404).send({
          message: "Cart not found with owner name : " + req.params.owner_name,
        });
        res.send(cart);
      }
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Cart note found with owner name : " + req.params.owner_name,
        });
      }
      return res.status(500).send({
        message:
          "Error retrieving cart with owner name : " + req.params.owner_name,
      });
    });
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
