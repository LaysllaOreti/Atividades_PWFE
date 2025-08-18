let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num + 1));
}

function bgChange(event) {
    let cor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) +")";
    event.target.style.backgroundColor = cor;
}

btn.addEventListener("click", bgChange);
 