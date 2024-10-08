let salarioIncial = 2000;
let aumento = salarioIncial * 0.20;
let salarioComAumento = salarioIncial + aumento;
let descontoINSS = salarioComAumento * 0.08;
let salarioFinal = salarioComAumento - descontoINSS;

console.log(`Salário inicial: R$${salarioIncial}`);
console.log(`Salário com aumento: R$${salarioComAumento}`);
console.log(`Desconto do INSS: R$${descontoINSS}`);
console.log(`Salário final: R$${salarioFinal.toFixed(2)}`);
