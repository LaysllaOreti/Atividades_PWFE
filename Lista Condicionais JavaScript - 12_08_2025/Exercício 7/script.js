let anoNascimento = parseInt(prompt("Por favor, insira o seu ano de nascimento: "));

//Serve para obter o ano atual
let anoAtual = new Date().getFullYear();

//Cálculo da idade
let idade = anoAtual - anoNascimento;

//Verificar se a pessoa pode votar
if (idade >= 18 && idade <= 70) {
    console.log("Você tem voto obrigatório.");
} else if (idade >= 16) {
    console.log("Você pode votar, mas não é obrigatório.");
} else {
    console.log("Você ainda não pode votar.");
}