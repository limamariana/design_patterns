"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();
// conecta ao banco
mongoose.connect(
  "mongodb+srv://99715332:99715332@cluster0.aj0kf.mongodb.net/test"
);

const Product = require("./models/product");

//Carrega rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
