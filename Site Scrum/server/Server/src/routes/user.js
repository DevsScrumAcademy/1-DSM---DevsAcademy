const express = require('express');
const router = express.Router();
const { insertUser } = require("../controllers/UserController");  // Importa o controlador

// Rota para inserir um novo usuário
router.post('/', insertUser);

module.exports = router;