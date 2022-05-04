/* --- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS --- 
1 - No concole vai aparecer o valor 10. A cada vez que passa o laço for, o i vale +1 e o valor vale ele mesmo + o valor de i
    inicio valor=0  i=0
    1º for valor=0  i=1
    2º for valor=1  i=2
    3º for valor=3  i=3
    4º for valor=6  i=4
    5º for valor=10 
2 - 19,21,23,25,27,30
    seria possível imprimir todos os números do array usando o for..of.. da seguinte maneira: 
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
		console.log(numero)
        }
3 -  *
     **
     ***
     ****

*/

// --- EXERCÍCIOS DE ESCRITA DE CÓDIGO --- //
/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array */
/*const pets = prompt("Quantos bichinhos de estimação você tem?")
let nomesDosPets = []
if (pets == 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if (pets > 0){
    for (let pet = 0; pet < pets; pet++){
    nome = prompt("Quais os nomes dos seus bichinhos?")
    nomesDosPets.push(nome)    
    }
    console.log(nomesDosPets)
}*/


//a) Escreva um programa que imprime cada um dos valores do array original.
const arrayOriginal = [12,372,23,45,5,6,279,15,]
for (let numero of arrayOriginal) {
    console.log(numero)
    }

//b)Escreva um programa que imprime cada um dos valores do array original divididos por 10    
for (let numero of arrayOriginal) {
    console.log(numero/10)
    }

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
let arrayDePares = []
for (let i=0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] % 2 === 0){
        arrayDePares.push(arrayOriginal[i])
    }
}
console.log(arrayDePares) 

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
let i = 0
let arrayStrings = []
while (i < arrayOriginal.length){
    let novoItem = ["O elemento do índex " + i.toString() + ' ' + "é" + ' ']
    novoItem += arrayOriginal[i].toString()
    arrayStrings.push(novoItem)
    i++
}
console.log(arrayStrings)

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let menor = 0
let maior = 0
for(let num of arrayOriginal){
    if (num > maior){
        maior = num
    } else if (num < arrayOriginal[menor]){
        menor = num
    }
}
console.log(`O menor número do meu array é ${menor} , e o maior é ${maior}`)

// --- DESAFIOS --- //

//1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si.

/*let numeroUsuario = Number(prompt("Digite um número: "))
let numero
let contagemTentativas = 0
while(numero !== numeroUsuario){
    numero = Number(prompt("O número chutado foi: "))
        if(numero < numeroUsuario){
            window.alert("Errrrrrrrrrrou, é maior")
            contagemTentativas++
        } else if (numero > numeroUsuario ) {
            window.alert("Errrrrrrrrrrou, é menor")
            contagemTentativas++
        } else { window.alert(`Você acertou!!!
        o número de tentativas foi: ${contagemTentativas}`)
    }
}*/

//Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

let numeroAleatorio = Math.floor((Math.random() * 100) + 1);
let numero
let contagemTentativas = 0
while(numero !== numeroAleatorio){
    numero = Number(prompt("O número chutado foi: "))
        if(numero < numeroAleatorio){
            window.alert("Errrrrrrrrrrou, é maior")
            contagemTentativas++
        } else if (numero > numeroAleatorio ) {
            window.alert("Errrrrrrrrrrou, é menor")
            contagemTentativas++
        } else { window.alert(`Você acertou!!!
        o número de tentativas foi: ${contagemTentativas}`)
    }
}