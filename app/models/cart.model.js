const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    owner_name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
