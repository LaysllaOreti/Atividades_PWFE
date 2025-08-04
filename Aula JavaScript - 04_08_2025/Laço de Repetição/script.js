// AND == &&
// OR == ||
// NOT == !

if ( 3 > 4 ) {
    console.log("Oi");
} else if ( 5 > 6 ){
    console.log("Olá");
} else {
    console.log("Tchau");
}

let cor = prompt("Escolha uma cor: ")

switch(cor){
    case "amarelo":
        console.log("Você gosta de: ", cor);
    break;
    case "rosa":
        console.log("Você gosta de: ", cor);
    break;
    case "azul":
        console.log("Você gosta de: ", cor);
    break;
    case "verde":
        console.log("Você gosta de: ", cor);
    break;
    case "roxo":
        console.log("Você gosta de: ", cor);
    break;
    case "vermelho":
        console.log("Você gosta de: ", cor);
    break;
    default:
        console.log("Você é um coloridinho")
}

// Operador ternário
let idade = prompt("Digite a sua idade: ");
let maiorIdade = idade >= 18 ? "Sim" : "Não";

console.log(maiorIdade);

