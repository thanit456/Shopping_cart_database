const mongoose = require("mongoose");

import ItemSchma from "./item.model";

const CartSchema = mongoose.Schema(
  {
    owner_name: String,
    items: [ItemSchma],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
