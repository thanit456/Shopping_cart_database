const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: String,
  amount: Number,
  price_baht: Number,
  category: String,
  description: String,
  image_url: String,
});

module.exports = mongoose.model("Item", CartSchema);
