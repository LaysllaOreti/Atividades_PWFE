let ano = parseInt(prompt("Insira um ano para descobrir se ele é bissexto ou não: "));

//Verificar se ele é bissexto ou não
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    console.log(`O ano ${ano} é bissexto!`)
} else {
    console.log(`O ano ${ano} não é bissexto.`)
}
