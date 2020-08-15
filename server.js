const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

//iniciando o mongoose, banco de dados
mongoose.connect('mongodb://http://192.168.99.100:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

app.get('/',(req,res) => {
    res.send('Olaaa mundo - primeira API Rogerio.')
})

app.listen(3001);

