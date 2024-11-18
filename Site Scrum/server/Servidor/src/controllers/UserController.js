const client = require("./db"); // Importa a conexão do banco de dados

// Função para inserir um usuário
async function insertUser(req, res) {
  const { nome, mail, senha } = req.body;

  if (!nome) {
    res.send({ error: "O nome é obrigatório" });
  } else if (!mail) {
    res.send({ error: "O e-mail é obrigatório" });
  } else if (!senha) {
    res.send({ error: "A senha é obrigatória" });
  } else {
    try {
      const query = {
        text: "INSERT INTO usuario (nome, mail, senha) VALUES ($1, $2, $3 ) RETURNING id, nome, mail",
        values: [nome, mail, senha],
      };

      const result = await client.query(query);
      if (result.row.length > 0) {
        return "E-mail já existe!";
      }

      result = await client.query(query); // Executa a query
      res.json(res.rows[0]);
      return "Usuário cadastrado";
    } catch (err) {
      res.json({ message: err.message });
    }
  }
}

// Função para validar o login
async function loginUser(req, res) {
  const { mail, senha } = req.body;

  // Recuperar o usuário do banco de dados pelo e-mail
  const query = {
    text: "SELECT mail, senha FROM usuario WHERE mail = $1 AND senha = $2",
    values: [mail, senha],
  };

  try {
    const result = await client.query(query);

    // Se o usuário não existir, retornamos um erro
    if (result.rows.length == 0) {
      return res.status(400).json({ message: "E-mail ou senha inválidos" });
    }

    const user = result.rows[0];
    // Retornar o usuário
    res.json({
      idusuario: user.idusuario,
      nome: user.nome,
      mail: user.mail,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { insertUser, loginUser };
