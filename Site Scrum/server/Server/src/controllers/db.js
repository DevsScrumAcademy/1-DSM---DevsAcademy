const { Client } = require('pg');





// Configuração da conexão
const client = new Client({
    user: 'postgres',        // Seu usuário do PostgreSQL
    host: 'database-1.c9iy2i0kmhng.us-east-1.rds.amazonaws.com',          // O endereço do servidor do banco de dados (use 'localhost' para desenvolvimento local)
    database: 'postgres',            // Nome do banco de dados
    password: 'Arthur10',       // Senha do seu usuário PostgreSQL
    port: 5432,                 // Porta padrão do PostgreSQL
});

// Conectar ao banco de dados
client.connect()
    .then(() => console.log('Conectado ao banco de dados com sucesso!'))
    .catch((err) => console.error('Erro de conexão ao banco de dados:', err.stack));

// Exportando o cliente para usar em outros arquivos
module.exports = client;
