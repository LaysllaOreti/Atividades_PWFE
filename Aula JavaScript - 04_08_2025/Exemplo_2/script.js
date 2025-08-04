//Array
let arr = ["Julya", "Layslla", "Leticia", "Yasmin"];
//Começa do 0, o indice
console.log(arr[1]);
 
//Criação de objeto no JS
let obg = {nome: 'Layslla', idade: 19, profissao: "Programadora"};
//Mostrando todas as propriedades e valores
console.log(obg)
//Apenas o nome
console.log(obg.nome)
 
//Uma variável, se comportando como um array
let nome = "Leticia";
console.log(nome[0]);
//Função de charArt
console.log(nome.charAt(5));

let a = "c";
let b = "a";
console.log(a>b);
let c = 25

console.log(typeof(a)); // tipos
console.log(c.toString());
console.log(arr.toString());
console.log(arr);
console.log(arr.length); // tamanho do array
console.log(nome.slice(3,6));
console.log(nome.toLowerCase());
console.log(nome.toLocaleUpperCase());
console.log(nome.replace("Le", "Re")); // muda os caracteres que você indicar

let lista = "Julya, Layslla, Leticia, Yasmin";
console.log(lista)

lista = lista.split(",");
console.log(lista);

lista = lista.join(",");
console.log(lista);

console.log(arr);
arr.push("Márcia"); // adiciona no final da lista
console.log(arr);

arr.unshift("Marianny"); // adiciona no começo da lista

arr.pop(arr); // o pop tira do fim da lista
console.log(arr);

arr.shift(arr); // o shift tira do começo da lista
console.log(arr);
