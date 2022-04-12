/* Respostas
1 - 10, 5
2 - 10, 10, 10
3 - let horasDiaras     let salarioDia
*/

let nome
let idade

console.log(typeof nome, typeof idade)
// Este console.log retornou o tipo undefined porque eu não defini valores nas variáveis

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

console.log(typeof nome, typeof idade)
// Aqui as variáveis foram transformadas em string

console.log("Olá", nome, "você tem", idade, "anos")