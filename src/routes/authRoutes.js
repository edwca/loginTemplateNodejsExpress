const express = require('express');
const router = express.Router();


// ruta exacta para el login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Aquí iría la lógica real de autenticación
  // Por ejemplo, validar usuario y contraseña en base de datos

  if (username === 'admin' && password === '1234') {
    return res.json({ message: 'Usuario autenticado correctamente' });
  } else {
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }
});

module.exports = router;
