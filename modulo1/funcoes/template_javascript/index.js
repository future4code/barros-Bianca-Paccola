/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1 - a) 10
       50
    b) não apareceria nada no console; apesar da função executar, nós não demos uma forma de saída visual.
2 - a) Ela pesquisa se na frase contém a palavra cenoura, retornando um valor booleano. O toLowerCase, neste caso, serve para fazer essa pesquisa de forma que ele não diferencie maísculas de minúsculas. Retornando true mesmo tiver o usuário e escrito a palavra cenoura de formas diferentes, como por ex: CENOURA ou CenourA.
    b) os três consoles formas retornarão true.
*/

// --- EXERCÍCIOS DE ESCRITA DE CÓDIGO --- //

//Exercídio 01 A
function sobreMim () {
    console.log("Me chamo Bianca, tenho 31 anos, moro no interior de SP e sou estudante da Lebenu")
}
sobreMim()
//Exercídio 01 B
function infoPessoais (nome, idade, cidade, profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}
console.log(infoPessoais("Ana Paula", 33, "São Paulo", "Dermatologista"))

//Exercício 02 A
function soma (num1, num2) {
    return num1 + num2
}
console.log("A soma dos números é: ", soma(3,5))
//Exercício 02 B
function comparacao(num1, num2) {
    return num1 >= num2
}
console.log(comparacao(10,21))
//Exercício 02 C
function verificaParidade(numero) {
    return numero % 2 == 0
} 
console.log("O número é par?", verificaParidade(42))
//Exercício 02 D
function imprimirMensMaiusculas(mensagem){
    return mensagem.toUpperCase()+" "+mensagem.length
}
console.log(imprimirMensMaiusculas("Eu amo estudar na Labenu!!!"))

//Exercício 03
let soma2 = function(num1,num2){
    return num1 + num2
}
let subtracao = function(num1,num2){
    return num1 - num2
}
let multiplicacao = function(num1,num2){
    return num1  * num2
}
let divisao = function(num1,num2){
    return num1 / num2
}
let num1Usuario = Number(prompt("Digite um número:"))
let num2Usuario = Number(prompt("Digite mais um número:"))
console.log("A soma dos números digitados é: ",soma2(num1Usuario,num2Usuario))
console.log("Subtraindo os números digitados temos a diferença: ",subtracao(num1Usuario,num2Usuario))
console.log("A multiplicação resulta em: ",multiplicacao(num1Usuario,num2Usuario))
console.log("A divisão dos números resulta em: ",divisao(num1Usuario,num2Usuario))

                    //--- DESAFIOS ---//
//Desafio 01
const mensagem = (texto) => {
    console.log(texto)
}

let soma3 = (num1,num2) => num1 + num2

mensagem(soma3(5,5))

//Deasafio 02
function pitagoras(cateto1,cateto2){
    let somaCatetos = (cateto1 * cateto1) + (cateto2 * cateto2)
    let hipotenusa = Math.sqrt(somaCatetos)
    return hipotenusa
}
console.log("O valor da hipotenusa é: ",pitagoras(3,4))
