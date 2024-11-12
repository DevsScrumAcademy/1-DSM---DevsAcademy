const client = require('./db');  // Importa a conexão do banco de dados

// Função para inserir um usuário
async function insertUser(req, res) {
    const {nome, mail, senha, proges, pergunta, resposta } = req.body;

    const query = {
        text: 'INSERT INTO usuario (nome, mail, senha, progres, pergunta, resposta) VALUES ($1, $2, $3, $4, $5) RETURNING nome, mail, senha, proges, pergunta, resposta',
        values: [nome, mail, senha, proges, pergunta, resposta ]
    };
    

    try {
        const queryDois = {
            text: "Select mail from usuario where mail = $1" ,
            values: [mail]
        };
        var result = await client.query(queryDois);
        if (result.row.length > 0){
            return "E-mail já existe!";
        };

        result = await client.query(query);  // Executa a query
        res.json(res.rows[0]);
        return "Usuário cadastrado";
    } catch (err) {
        res.json({message: err.message});
    }
}

// Função para validar o login
async function loginUser(req, res) {
    const { mail, password } = req.body;

    // Recuperar o usuário do banco de dados pelo e-mail
    const query = {
        text: 'SELECT idusuario, nome, mail, senha FROM usuario WHERE mail = $1 AND senha = $2',
        values: [mail, password],
    };

    try {
        const result = await client.query(query);

        // Se o usuário não existir, retornamos um erro
        if (result.rows.length == 0) {
            return res.status(400).json({ message: 'E-mail ou senha inválidos' });
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




