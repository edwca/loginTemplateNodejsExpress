//configura el servidor Express, dice cómo manejar las rutas y archivos
const express = require('express');
const routes  = require('./routes');
const app = express();
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// middleware
app.use(express.json());

// todas las rutas comienzan con /api
app.use('/api',routes);
app.use(express.static(path.join(__dirname, '..', 'public')));

// redireccionar a login.html
app.get('/', (req, res) => {
  res.redirect('/login.html');
});


// configuración para cargar en swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// manejo error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno con servidor');
});

module.exports = app;