let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num + 1));
}

//Com a função criada antes 

// function bgChange(){
//     let cor = 
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) +")";
//     document.body.style.backgroundColor = cor;
// }

// btn.addEventListener("click", bgChange);

//Criando a função depois (function anônima)

// btn.addEventListener("click", function () {
//     let cor =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) +")";
//     document.body.style.backgroundColor = cor;
// })

//criando uma arrow function
btn.addEventListener("click", () => {
    let cor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) +")";
    document.body.style.backgroundColor = cor;
})
