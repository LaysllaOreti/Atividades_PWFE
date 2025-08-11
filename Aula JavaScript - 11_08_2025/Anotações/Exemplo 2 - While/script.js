let gatos = ["Floquinho", "Morgana", "Papito"];
let completo = "Meus gatos se chamam: ";
let i = 0;

while (i < gatos.length){
    if (i == gatos.length - 1) {
        completo += "e" + gatos[i] + ","
    }else {
        completo += gatos[i] + " , "
    }
    i++;
}

console.log("Exemplo While", completo)