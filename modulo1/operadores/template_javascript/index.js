/*
---------Respostas---------
1. a. false
   b. false
   c. true
   d. boolean

2. O código não funciona como deveria porque o prompt transforma o número inserido pelo usuário em uma string. Dessa forma, o console vai concatenar ao invés de somar.

3. Precisa converter a resposta do prompt para váriavel do tipo Number. Três formas:
    1 - let primeiroNumero = Number(prompt("Digite um número!"))
        let segundoNumero = Number(prompt("Digite outro número!"))

    2 - const soma = Number(primeiroNumero) + Number(segundoNumero)    

    3 - console.log(Number(primeiroNumero) + Number(segundoNumero))

*/

// ------Exercícios de escrita de código--------

                //-------- 1 -------//

let idadeUsuario = Number(prompt("Digite sua idade:"))
let idadeAmigo = Number(prompt("Digite a idade do seu amigo:"))
let diferencaIdade = idadeUsuario - idadeAmigo
let comparacaoIdade = idadeUsuario > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacaoIdade)
console.log("A diferença entre as idades é:", diferencaIdade)

               //-------- 2 -------//

const numeroPar = Number(prompt("Digite um número par:"))

console.log(numeroPar % 2)   
//Aqui o resto da divisão de número par por 2, sempre vai ser 0. E se o número for ímpar será sempre 1

                //-------- 3 -------//

idadeUsuario = Number(prompt("Digite novamente sua idade:"))

let meses = idadeUsuario * 12
let dias = idadeUsuario * 365
let horas = dias * 24

console.log(idadeUsuario, "anos são equivalentes a", meses, "meses.", dias, "dias e", horas, "horas.")


            //-------- 4 -------//

let numero1 = Number(prompt("Digite um número inteiro:"))            
let numero2 = Number(prompt("Digite outro número inteiro:"))
let diferenca = numero1 > numero2
let igualdade = numero1 === numero2
let modulo = (numero1 % numero2) === 0
let modulo2 = (numero2 % numero1) === 0

console.log("O primeiro número é maior que o segundo?", diferenca)
console.log("O primeiro número é igual ao segundo?", igualdade)
console.log("O primeiro número é dívisivel pelo segundo", modulo)
console.log("O segundo número é divisível pelo primeiro", modulo2)

            //-------- DESAFIO -------//

 //uniadades de temperatura           

let grausFahrenheit = 77

let grausKelvin = (grausFahrenheit - 32) * (5/9) + 273.15
console.log(grausFahrenheit,"º F é igual a", grausKelvin,"º K")

let grausCelsius = 80

grausFahrenheit = grausCelsius * (9/5) + 32
console.log(grausCelsius,"ºC é igual a", grausFahrenheit,"º F")

grausCelsius = 30

grausFahrenheit = grausCelsius * (9/5) + 32
console.log(grausCelsius,"ºC é igual a", grausFahrenheit,"º F")

let grausCelsiusUsuario = Number(prompt("Digite quantos graus celsius você quer calcular:"))

grausKelvin = grausCelsiusUsuario + 273,15
console.log(grausCelsiusUsuario,"ºC é igual a", grausKelvin,"º K")

//quilowatts

let quilowatts = 280
let quilowattHora = quilowatts * 0.05
let calculoDoDesconto = quilowattHora * 0.15
let calculoFinal = quilowattHora - calculoDoDesconto

console.log(quilowattHora)
console.log("O valor a ser pago considerando o desconto de 15% é", calculoFinal)

//unidades de medida

let libras = 20
const librasToQuilograma = 2.205
let soma = libras / librasToQuilograma

    console.log(libras,"lb equivalem a", soma,"kg")

let oz = 10.5
const ozToQuilograma = 3.527
soma = oz / ozToQuilograma

    console.log(oz,"oz equivalem a",soma,"kg")

let milha = 100
const milhaToMetro = 1609
soma = milha * milhaToMetro

    console.log(milha,"mi equivalem a",soma,"m")

let pes = 50
const pesToMetros = 3.281
soma = pes / pesToMetros

    console.log(pes,"ft equivalem a",soma,"m")

let galao = 103.56
const galaoToLitro = 379
soma = galao * galaoToLitro

    console.log(galao,"gal equivalem a", soma,"l")

let medidaXicara = 0.240
let xicaras = 450
let xicarasTolitros = xicaras * 0.240
    
    console.log(xicaras,"xic equivalem a",xicarasTolitros,"l")






















