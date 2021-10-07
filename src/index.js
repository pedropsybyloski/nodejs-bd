const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res)=>{
    res.send('Olá projeto node com banco de dados');
});

// ERRO 404
app.get((req, res)=>{
    res.status().send("Pagina não encontrada");
});

app.listen(process.env.PORT);