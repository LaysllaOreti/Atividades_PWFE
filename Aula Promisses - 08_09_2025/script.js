let saldo = 100;

let odd;
 
const btn = document.getElementById("aposta");

const dinheiro = document.getElementById("saldo");

const body = document.querySelector("body");
 
dinheiro.innerHTML = "Saldo: R$" + saldo;
 
let fazerAposta = (valor) => new Promise((resolve, reject) => {

    console.log("Esperando o fim do jogo...");

    sorteio = Math.random();

    if(saldo >= valor) {

        saldo -= valor;

        if(sorteio < 0.3) {

            let valorGanho = valor * odd;

            saldo += valorGanho;

            resolve("Parabéns! Você ganhou R$" + valorGanho);

        } else {

            resolve("Infelizmente você perdeu R$" + valor + ".");

        }

        dinheiro.innerHTML = "Saldo: R$" + saldo;

    } else {

            reject("Você não possui a quantidade de dinheiro necessária para apostar esse valor. Por favor, insira valores mais baixos para conseguir ganhar dinheiro!");

    }
 
    if(saldo <= 0) {

            body.style.backgroundColor = "red";

            body.innerHTML = "<h1>VOCÊ PERDEU!!!</h1>";

            body.querySelector("h1").style.textAlign = "center";

            reject("Você perdeu!!!");

        }

});
 
btn.addEventListener("click", () => {

    do {

        odd = Math.floor(Math.random() * 9) + 2;

    } while (odd < 2);

    fazerAposta(Number(prompt("Digite o valor que deseja apostar. Odd: " + odd)))

        .then(alert)

        .catch(alert)

    });
 