//Do while é usado quando você quer executar tudo antes de validar. Ou seja, faça enquanto valide/verifique

let gatos = ["Floquinho", "Morgana", "Papito"];
let completo = "Meus gatos se chamam: ";
let i = 0;

do{
    if (i == gatos.length - 1) {
        completo += "e" + gatos[i] + ","
    }else {
        completo += gatos[i] + " , "
    }
    i++;
} while (i < gatos.length);

console.log("Exemplo Do ... While", completo)