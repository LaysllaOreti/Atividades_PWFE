let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "));
let salarioHora = parseFloat(prompt("Digite o valor do salário por hora trabalhada: "));

//Cáculo da jornada mensal
let horasJornadaMensal = 40 * 4;

//Cáculo do salário 
let salarioTotal;

if (horasTrabalhadas > horasJornadaMensal) {
    //Cáclulo horas extras
    let horasExtras = horasTrabalhadas - horasJornadaMensal;
    let valorHoraExtra = salarioHora * 1.5; //Equivale a 50% a mais
    salarioTotal = (horasJornadaMensal * salarioHora) + (horasExtras * valorHoraExtra);
} else {
    //Cálculo sem hora extra
    salarioTotal = horasTrabalhadas * salarioHora;
}    

//Exibe o resultado
console.log(`O salário total é igual a: R$ ${salarioTotal.toFixed(2)}`);
   