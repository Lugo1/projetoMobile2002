var salario = 2000.00;
var aumento = 0.15;
var inflacao = 0.07;
var novoSalario = salario + (aumento*salario);
var novoSalarioInflacao = novoSalario -(inflacao*novoSalario);
console.log(novoSalario);
console.log(novoSalarioInflacao);