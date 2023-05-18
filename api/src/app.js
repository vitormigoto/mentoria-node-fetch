const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuração de middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const userRoutes = require('./routes/usersRoutes');

// Definindo rotas
app.use('/usuarios', userRoutes);

module.exports = app;