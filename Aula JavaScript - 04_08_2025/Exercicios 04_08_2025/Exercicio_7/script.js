// 1 litro de tinta cobre 2 metros quadrados
const rendimento = 2;

let largura = Number(prompt("Insira a largura da parede: "));
let altura = Number(prompt("Insira a altura da parede: "));

let areaParede = largura * altura;

// Quantidade de tinta
let litrosTinta = areaParede / rendimento;

// Arredondamento pra cima
let litrosArredondado = Math.ceil(litrosTinta);

console.log(`Você vai precisar de aproximadamente ${litrosArredondado} litro(s) de tinta.`);
