const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    owner_name: String,
    description: String,
    // items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
