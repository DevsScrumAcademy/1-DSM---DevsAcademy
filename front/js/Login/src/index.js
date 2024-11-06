console.log("Criar conta: ");
console.log("");
console.log("");
nomeUsuario = prompt("Nome completo: ");
console.log("");
console.log("");
emailUsuario = prompt("Email: ");
confirmaçãoDeEmail = prompt("Confirme seu e-mail: ");
while (emailUsuario != confirmaçãoDeEmail) {
    console.log("e-mail não confere, tente novamente!");
    emailUsuario = prompt("Email: ");
    confirmaçãoDeEmail = prompt("Confirme seu e-mail: ");
}
console.log("");
console.log("");
senha = prompt("Senha: ");
while (senha.length > 50){
    console.log("A senha ultrapassou a quantidade máxima de caracteres possíveis, tente novamente: ")
    senha = prompt("Senha: ");
}
confirmacaoDeSenha = prompt("Confirmação de senha: ");
while (senha != confirmacaoDeSenha){
    console.log("As senhas não conferem, digiete novamente: ")
    senha = prompt("Senha: ");
    while (senha.length > 50){
        console.log("A senha ultrapassou a quantidade máxima de caracteres possíveis, tente novamente: ")
        senha = prompt("Senha: ");
    }
    confirmacaoDeSenha = prompt("Confirmação de senha: ");
}
console.log("Cadastro realizado com sucesso!");
