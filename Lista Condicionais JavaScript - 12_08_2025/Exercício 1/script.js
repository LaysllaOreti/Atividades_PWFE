let numero = parseInt(prompt("Insira um número: "));

//Verificar se é par ou ímpar com if/else
if (numero % 2 === 0) {
    console.log(`O número inserido é par`);
} else {
    console.log(`O número inserido é ímpar`)
}

//Verificar se o número é múltiplo de 3
if (numero % 3 === 0) {
    console.log(`O número ${numero} é múltiplo de 3`)
} else {
    console.log(`O número ${numero} não é múltiplo de 3`)
}

//Verificar se o número é múltiplo de 5
if (numero % 5 === 0) {
    console.log(`O número ${numero} é múltiplo de 5`)
} else {
    console.log(`O número ${numero} não é múltiplo de 5`)
}

