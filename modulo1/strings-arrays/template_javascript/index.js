/*Respostas dos exercícios de interpretação de código

1 - a. undefined
    b. null
    c. 10
    d. 3
    e. troca o elemento do índice 1 por 19, ficando: [3,19,5,6,7,8,9,10,11,12,13]
    f. 9

2 - SUBI NUM ÔNIBUS EM MIRROCOS (porém se considerar que o exemplo do console.log da questão está faltando um parêntese, irá dar erro)

*/

//Exercícios de escrita de código

    //Exercício01
let nomeDoUsuario = prompt("Digite seu nome:")
let emailDoUsuario = prompt("Informe seu email:")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

    //Exercício02
let comidasPreferidas = ["sushi", "sashimi", "temaki", "hossomaki", "oniguiri"]
console.log(comidasPreferidas)
console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}
`)
let comidaPreUsuario = prompt("Digite sua comida preferida:")
comidasPreferidas.splice(1,1,comidaPreUsuario)
console.log(comidasPreferidas)

    //Exercício03
let listaDeTarefas = []
listaDeTarefas.push(prompt("Digite 1 tarefa que precisa ser realizada"))
listaDeTarefas.push(prompt("Digite uma segunda tarefa"))
listaDeTarefas.push(prompt("Digite uma terceira tarefa"))
console.log(listaDeTarefas)

let tarefaAtirar = Number(prompt(`
0 --> Primeira tarefa;
1 --> Segunda tarefa;
2 --> Terceira tarefa.
`))
listaDeTarefas.splice(tarefaAtirar,1)
console.log(listaDeTarefas)


//Desafios

    //Desafio01
let frase = prompt("Digite uma frase:")
let array = frase.split(" ")
console.log(array)

    //Desafio02
let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(arrayFrutas.indexOf("Abacaxi"),(arrayFrutas.length))










