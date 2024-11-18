const express = require('express');
const router = express.Router();
const { insertUser, loginUser } = require("../controllers/UserController");  // Importa o controlador


// Rota para inserir um novo usuário
router.post('/', insertUser);
router.post("|", loginUser);

module.exports = router;