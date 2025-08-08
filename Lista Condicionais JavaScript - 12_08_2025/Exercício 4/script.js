let escolha = prompt("Digite a letra 'C' para converter de Celsius para Fahrenheit ou a letra 'F' para converter de Fahrenheit para Celsius:").toUpperCase();

//Se a conversão for de Celsius para Fahrenheit
if (escolha === "C") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F`);
}

//Se a conversão for de Fahrenheit para Celsius
else if (escolha === "F") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F equivalem a ${celsius.toFixed(2)}°C`);
}

//Caso for digitado alguma letra inválida
else {
    console.log("Opção inválida. Digite apenas 'C' ou 'F'.");
}
