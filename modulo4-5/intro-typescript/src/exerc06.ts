// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

import { comparaDoisNumeros } from "./exerc04"

function comparaNumeros (num1: number, num2: number) : void {
  const subtracao: number = comparaDoisNumeros(num1, num2);
  console.log(`A soma desses números é: ${num1 + num2}`)
  console.log(` A subtração desses números é: ${subtracao}`)
  console.log(`A multiplicação desses números é: ${num1 * num2}`)
  console.log(`O maior número é: ${num1 > num2 ? num1 : num2} `)
}

comparaNumeros(40,55)