const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const shelf_controller = require("./shelf_controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

// app.post("/api/product", shelf_controller.createProduct);
app.get("/api/product/:id", shelf_controller.readProduct);
// app.put("/api/product/:id", shelf_controller.updateProduct);
// app.delete("/api/product/:id", shelf_controller.removeProduct);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
