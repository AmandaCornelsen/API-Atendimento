const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado com sucesso!'))
.catch(err => console.error('Erro ao conectar no MongoDB:', err));


app.use('/api', routes);

module.exports = app;