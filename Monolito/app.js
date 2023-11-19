const express = require('express');

const app = express();

const {  mongoConn } = require('./databases/configuration');
mongoConn()

const cors = require('cors');

const tiposProyecto = require('./routes/tipoProyecto');

const cliente = require('./routes/cliente');

const etapa = require('./routes/etapa');

const universidad = require('./routes/universidad');


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/tiposproyectos', tiposProyecto);
app.use('/api/cliente', cliente);
app.use('/api/etapa', etapa);
app.use('/api/universidad', universidad);

module.exports = app;