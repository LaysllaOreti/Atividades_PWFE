let velocidadeCarro = parseFloat(prompt("Por favor, insira a velocidade do carro em Km/h: "));

//Velocidade máxima/limite
let limite = 80;

//Verificar se ultrapassou o limite
if (velocidadeCarro > limite) {
    let excesso = velocidadeCarro - limite;
    let multa = excesso * 5;
    console.log(`Você foi multado por excesso de velocidade! Velocidade acima do limite em ${excesso}Km/h.`);
    console.log(`O valor da multa é: R$ ${multa.toFixed(2)}`);
} else {
    console.log("Velocidade dentro do limite!");
}
