'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(3000, () => {
  console.log('servidor escuchando en puerto 3000');
});
