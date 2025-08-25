//inicializando as variáveis
let numeros = Array.from({ length: 75 }, (_, i) => i + 1); //vai criar todos os números até 75
let historicoBingo = []; //vai guardar os número sorteados

const drawButton = document.querySelector(".drawButton"); //vai pegar o botão "SORTEAR" que criamos
const resetButton = document.querySelector(".resetButton"); //pega o botão "RESETAR"
const bingoButton = document.querySelector(".bingoButton"); //pega o botão "BINGO" que foi criado
const drawTitle = document.getElementById("drawTitle"); //pega o <h1> que vai mostrar o número que foi sorteado

//cria o container do histórico dos números
const historicoDiv = document.createElement("div"); //vai criar uma div por meio do JS 
historicoDiv.id = "historicoBingo"; //cria um id para estilizar e criar
historicoDiv.innerHTML = "<h2>Histórico:</h2><div id='numerosHistorico'></div>"; //mensagem inicial para quando nenhum número for sorteado ainda
document.getElementById("options").appendChild(historicoDiv); //coloca a div dentro da seção criada para as opções

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
  const celulas = document.querySelectorAll("#table td"); //vai pegar todas as células de número
  celulas.forEach((td) => { //percorre por todas as células
    if (td.textContent == numero) { //vai comparar o texto inserido na célula e o número que foi sorteado
      td.classList.add("selectedNumber"); //vai adicionar a classe que foi criada para mudar o estilo 
    }
  });
}

//sorteia um número aleatório
function sortearNumeroBingo() { //lógica utilizada para sortear sem que se repita
  if (numeros.length === 0) { //se não tiver mais nenhum número para sortear
    drawTitle.textContent = "Todos os números já foram sorteados!"; //irá exibir uma mensagem no título
    return; //sairá da função
  }

  const indice = Math.floor(Math.random() * numeros.length); //pega um número aleatório do array "números"
  const numeroSorteado = numeros[indice]; //lê o número

  //vai atualizar a array
  historicoBingo.push(numeroSorteado); //guarda o número sorteado no histórico
  numeros.splice(indice, 1); //remove ele do array de disponíveis

  //atualiza na tela
  drawTitle.textContent = numeroSorteado; //mostra o número sorteado no lugar no título
  marcarTabela(numeroSorteado); //vai pintar a célula da tabela com o número correspondente
  atualizarHistorico(); //redesenha o histórico que foi atualizado
}

//função para resetar todo o histório e toda a partida
function resetarBingo() { //volta no estado inicial
  numeros = Array.from({ length: 75 }, (_, i) => i + 1); //vai recriar todo o array (todos os números de 1 a 75)
  historicoBingo = []; //limpar histórico
  drawTitle.textContent = "Sorteador"; //volta com o título Inicial
  atualizarHistorico(); //redesenha todo o histórico

  //remover todas as marcações (célular preenchidas) da tabela
  document.querySelectorAll("#table td").forEach((td) => { //vai pegar todas as células
    td.classList.remove("selectedNumber"); //tira a classe "selectedNumber"
  });
}

/*Estilização do jogador de confetes*/
function jogarConfete() { //vai criar várias partículas "caindo"
  const duration = 4000; //com duração de 4 segundos
  const end = Date.now() + duration; //momento que deve parar

  (function frame() { //função chamada imediata recursiva, ou seja, ela se autoexecuta e se agenda de novo para execução futura
    //criará uma partícula por frame
    const colors = ["#85284a", "#89465d", "#D81B60", "#b35370", "#cb5a7e", "#d1708a"]; //paleta de cores para os confetes
    const particle = document.createElement("div"); //cria uma div para ser o "confete"
    particle.classList.add("confeteBingo"); //aplicação da classe
    particle.style.left = Math.random() * 100 + "vw"; // posição horizontal aleatória (0 a 100% da largura da viewport)
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; //random para escolher uma cor aleatória
    document.body.appendChild(particle); //vai "injetar" ele em cima do body para dar o efeito que está caindo sobre tudo

    //vai remover depois de ocorrer a animação, para não acumular nada no DOM
    setTimeout(() => particle.remove(), 4000); //depois de 4 segundos, tira o elemento

    if (Date.now() < end) { //caso ainda o tempo total não tenha passado
      requestAnimationFrame(frame); //vai agendar a próxima partícula no próximo frame
    }
  })(); 
}

//criando eventos
drawButton.addEventListener("click", sortearNumeroBingo); //quando "SORTEAR" for clicado, executa 'sortearNumeroBingo()'
resetButton.addEventListener("click", resetarBingo); //quando "RESETAR" for clicado, executa 'resetarBingo()'
bingoButton.addEventListener("click", jogarConfete); //quando "BINGO" for clicado, executa 'jogarConfete()'
