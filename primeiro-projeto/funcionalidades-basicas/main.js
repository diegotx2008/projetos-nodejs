const express = require("express");
const app = express();

var Product = require("./my-modules/product/priceProduct");

console.log(Product("Notebook Acer 345",15,4531.58,0.8));


app.listen(8084);