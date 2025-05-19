exports.getAllUsers = (req, res) => {
  res.json({ message: 'Lista de usuarios' });
};

exports.createUser = (req, res) => {
  const user = req.body;
  // lógica para crear usuario
  res.status(201).json({ message: 'Usuario creado', user });
};
