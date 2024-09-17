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

