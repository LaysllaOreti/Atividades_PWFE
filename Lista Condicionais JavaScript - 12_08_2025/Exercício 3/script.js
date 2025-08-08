let idade = parseInt(prompt("Por favor, insira a sua idade: "));

// Classificar a faixa etária pela idade
if (idade < 2) {
    console.log('Sua faixa etária é classificada como Bebê');
} else if (idade >= 2 && idade < 13) {
    console.log('Sua faixa etária é classificada como Criança');
} else if (idade >= 13 && idade < 18) {
    console.log('Sua faixa etária é classificada como Adolescente');
} else if (idade >= 18 && idade < 60) {
    console.log('Sua faixa etária é classificada como Adulto');
} else {
    console.log('Sua faixa etária é classificada como Idoso');
}
