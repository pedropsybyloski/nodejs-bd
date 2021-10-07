const express = require("express");
const app = express();
const mustache = require('mustache-express');
const path = require('path');
const dotenv = require('dotenv');
const indexRoute = require('./routes/route');

dotenv.config();

app.set('view engine', 'mustache');
app.set('views',path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use(indexRoute);

// ERRO 404
app.use((req, res)=>{
    res.status(404).send("Pagina não encontrada");
});

app.listen(process.env.PORT);