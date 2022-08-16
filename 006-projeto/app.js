console.log('Olá pra o Mundo!')
var num1 = 10;
var num2 = 15;
var num3 = 5;
console.log(num2>num1)
console.log(num1>num3)
if (num2>num1 && num1>num3){
  console.log(`\t${num2} é maior que ${num1} e ${num1} é maior que  ${num3}`)
}
else {
  console.log(`\t${num3} é menor que ${num1} e ${num2}`)
}
//////OUTRO EXEMPLO:
console.log(num3>num1)
console.log(num2>num3)
if (num3>num1 || num2>num3){
  console.log(`\t${num2} é maior que ${num1} ou ${num1} é maior que ${num3}`)
}
else {
  console.log(`\t${num3} é menor que ${num1} e${num2}`)
}