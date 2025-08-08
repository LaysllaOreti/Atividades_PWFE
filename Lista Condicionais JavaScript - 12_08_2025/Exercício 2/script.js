let num1 = parseFloat(prompt("Insira o primeiro número: "));
let num2 = parseFloat(prompt("Insira o segundo número: "));
let num3 = parseFloat(prompt("Insira o terceiro número: "));

//Variável para armazenar o maior número
let maior;

//Verificar qual é o maior 
if (num1 >= num2 && num1 >= num3){
    maior = num1;
} else if (num2 >= num1 && num2 >= num3){
    maior = num2;
} else {
    maior = num3;
}

console.log(`O maior número entre eles é o: ${maior}`)