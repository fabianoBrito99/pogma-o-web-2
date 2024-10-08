let totalConta = 101.53;

let valorCarlos = Math.floor(totalConta / 3);
let valorAndre = Math.floor(totalConta / 3);
let valorFelipe = totalConta - (valorCarlos + valorAndre);

console.log(`Carlos deve pagar: R$${valorCarlos.toFixed(2)}`);
console.log(`André deve pagar: R$${valorAndre.toFixed(2)}`);
console.log(`Felipe deve pagar: R$${valorFelipe.toFixed(2)}`);
