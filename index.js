const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");
mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!");
    console.log(err);
  });
app.set();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Woof");
});
