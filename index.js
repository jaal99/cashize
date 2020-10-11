// Importar modulos requeridos para el servidor
const express = require("express");
const exphbs = require("express-handlebars");

// Crear un servidor utilizando express
const app = express();

app.use("/", (req, res, next) => {
    res.send("Bienvenido a Cashize");
})

app.listen(5000);