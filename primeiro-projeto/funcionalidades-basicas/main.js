const express = require("express");
const app = express();

var Product = require("./my-modules/product/priceProduct");

app.get("/", function (req, res) {
     res.send(Product("Notebook Acer 345",15,4531.58,0.8));
    }
);

app.get("/sobre", function (req, res) {
    res.send("Pagina Sobre");
   }
);

app.get("/produtos/:codigo", function (req, res) {
    res.send(req.params);
   }
);

app.get("/clientes/:codigo/:cpnj/", function (req, res) {
    res.send(req.params);
   }
);


app.listen(8084);