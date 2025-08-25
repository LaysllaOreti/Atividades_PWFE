//inicializando as variáveis
let numeros = Array.from({ length: 75 }, (_, i) => i + 1); //vai criar todos os números até 75
let historicoBingo = []; //vai guardar os número sorteados

const drawButton = document.querySelector(".drawButton"); //vai pegar o botão "SORTEAR" que criamos
const resetButton = document.querySelector(".resetButton"); //pega o botão "RESETAR"
const bingoButton = document.querySelector(".bingoButton"); //pega o botão "BINGO" que foi criado
const drawTitle = document.getElementById("drawTitle"); //pega o <h1> que vai mostrar o número que foi sorteado

//cria o container do histórico dos números
const historicoDiv = document.createElement("div"); //vai criar uma div pelo JS 
historicoDiv.id = "historicoBingo"; //cria um id pra estilizar depois
historicoDiv.innerHTML = "<h2>Histórico:</h2><div id='numerosHistorico'></div>"; //texto inicial quando não tem número sorteado
document.getElementById("options").appendChild(historicoDiv); //coloca a div dentro da seção de opções

//criando as funções

//irá atualizar o histórico na tela
function atualizarHistorico() { //redesenha o histórico
  const numerosHistorico = document.getElementById("numerosHistorico"); //pega o container do histórico
  if (historicoBingo.length === 0) { // se ainda não tem números sorteados
    numerosHistorico.textContent = ""; //não mostra nada
  } else {
    numerosHistorico.textContent = historicoBingo.join(", "); //lista de números separados por vírgula
  }
}

//vai marcar/inserir o número na tela
function marcarTabela(numero) { //vai "colorir" o número correspondente ao que foi sorteado
  const celulas = document.querySelectorAll("#table td"); //vai pegar todas as células da tabela
  celulas.forEach((td) => { //percorre todas as células
    if (td.textContent == numero) { //compara o texto da célula com o número sorteado
      td.classList.add("selectedNumber"); //adiciona a classe que muda o estilo 
    }
  });
}

//sorteia um número aleatório
function sortearNumeroBingo() { //lógica pra sortear sem repetir
  if (numeros.length === 0) { //se não tiver mais nenhum número
    drawTitle.textContent = "Todos os números já foram sorteados!"; //mensagem de aviso
    return; //sai da função
  }

  const indice = Math.floor(Math.random() * numeros.length); //pega um número aleatório do array "numeros"
  const numeroSorteado = numeros[indice]; //lê o número sorteado

  //vai atualizar a array
  historicoBingo.push(numeroSorteado); //guarda no histórico
  numeros.splice(indice, 1); //remove ele do array de disponíveis

  //atualiza na tela
  drawTitle.textContent = numeroSorteado; //mostra o número sorteado no título
  marcarTabela(numeroSorteado); //pinta a célula da tabela
  atualizarHistorico(); //redesenha o histórico atualizado
}

//função para resetar todo o histório e toda a partida
function resetarBingo() { //volta pro estado inicial
  numeros = Array.from({ length: 75 }, (_, i) => i + 1); //recria o array (1 a 75)
  historicoBingo = []; //limpa histórico
  drawTitle.textContent = "Sorteador"; //volta o título padrão
  atualizarHistorico(); //redesenha o histórico

  //remove todas as marcações da tabela
  document.querySelectorAll("#table td").forEach((td) => { //pega todas as células
    td.classList.remove("selectedNumber"); //remove a classe de destaque
  });
}

/*Estilização do jogador de confetes*/
function jogarConfete() { //vai criar várias partículas caindo
  const duration = 4000; //duração total de 4 segundos
  const end = Date.now() + duration; //hora que deve parar

  (function frame() { //função autoexecutável recursiva
    //criará uma partícula por frame
    const colors = ["#85284a", "#89465d", "#D81B60", "#b35370", "#cb5a7e", "#d1708a"]; //cores dos confetes
    const particle = document.createElement("div"); //cria uma div pro confete
    particle.classList.add("confeteBingo"); //aplica a classe
    particle.style.left = Math.random() * 100 + "vw"; //posição horizontal aleatória
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; //cor aleatória
    document.body.appendChild(particle); //injeta no body

    //remove depois da animação pra não acumular
    setTimeout(() => particle.remove(), 4000); //4 segundos depois remove

    if (Date.now() < end) { //se ainda não passou o tempo
      requestAnimationFrame(frame); //agenda a próxima partícula
    }
  })(); 
}

//criando eventos
drawButton.addEventListener("click", sortearNumeroBingo); //quando clicar em "SORTEAR"
resetButton.addEventListener("click", resetarBingo); //quando clicar em "RESETAR"
bingoButton.addEventListener("click", jogarConfete); //quando clicar em "BINGO"
