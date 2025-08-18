function gerarNumeroBingo() {
  const numeros = Array.from({length: 75}, (_, i) => i + 1); // Cria um array de 1 a 75
  const numerosSorteados = [];

  while (numeros.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * numeros.length); //Gera um índice aleatório
    const numeroSorteado = numeros.splice(indiceSorteado, 1)[0]; // Remove o número do array
    numerosSorteados.push(numeroSorteado); //Adiciona o número sorteado à lista de números sorteados
  }

  return numerosSorteados;
}

// Exemplo de uso:
const numerosSorteados = gerarNumeroBingo();
console.log(numerosSorteados);