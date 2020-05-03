module.exports = (app) => {
  const cart = require("../controllers/cart.controller");

  app.post("/cart", cart.create);

  app.get("/cart", cart.findAll);

  app.get("/cart/:id", cart.findOne);

  app.put("/cart/:id", cart.update);

  app.delete("/cart/:id", cart.delete);
};
