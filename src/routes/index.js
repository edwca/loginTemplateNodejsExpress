//agrupa todas las rutas del servidor
const express = require('express');
const router = express.Router();

// ruta login
const authRoutes = require('./authRoutes')
router.use('/', authRoutes);

// Proximas rutas
const userRoutes = require('./userRoutes')
router.use('/user', userRoutes);

module.exports = router;
