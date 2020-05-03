module.exports = (app) => {
  const cart = require("../controllers/cart.controller");

  app.post("/cart", cart.create);

  app.get("/cart/", cart.findAll);

  app.get("/cart/:owner_name", cart.findOne);

  app.put("/cart/:owner_name", cart.update);

  app.delete("/cart/:owner_name", cart.delete);
};
