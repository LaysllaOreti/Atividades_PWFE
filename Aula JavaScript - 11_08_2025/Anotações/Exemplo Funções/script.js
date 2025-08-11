// function hello(){
//     alert("Hello!");
// }

// hello();

//Funções Anônimas

// let soma = function(n1, n2){
//     return n1+n2;
// }
// alert(soma(4,6));

// let hello = function(){
//     console.log("Hello!!")
// }
// hello();

//Arrow Function

// let somaArrow = (n1, n2) => n1+n2;

// console.log(somaArrow(3,5));

// let hello = function(){
//     console.log("Hello");
//     console.log(somaArrow(7,6));
// }

// hello();

let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num + 1));
}

btn.onclick = function (){
    let cor = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) +")";
    document.body.style.backgroundColor = cor;
}