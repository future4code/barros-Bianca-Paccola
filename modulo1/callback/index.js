/*  EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
        const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" }
        ]

        const novoArrayA = usuarios.map((item, index, array) => {
        console.log(item, index, array)
        })
1 - Mapeia e imprimi no console cada um dos objetos o arrray.

        const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
        ]

        const novoArrayB = usuarios.map((item, index, array) => {
        return item.nome
        })

        console.log(novoArrayB)
2 - Cria um array com a propriedade nome de cada um dos objetos contidos no array original, depois imprime esse novo array no console.

        const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
        ]

        const novoArrayC = usuarios.filter((item, index, array) => {
        return item.apelido !== "Chijo"
        })

        console.log(novoArrayC)
3 - Cria um array com os objetos do array original, porém filtrando para entrar apenas os que tenham a propriedade apelido diferente de "Chijo". Depois imprime esse novo array no console.
*/

//----------EXERCÍCIOS DE ESCRITA DE CÓDIGO----------//

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomesPets = pets.map((dog)=> {
    return dog.nome
})
console.log(nomesPets)

//b) Crie um novo array apenas com os cachorros salsicha
const cachorroSalsicha = pets.filter((raca)=>{
    return raca.raca == "Salsicha"
})
console.log(cachorroSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const racaPoodle = pets.filter((raca)=> {
  return raca.raca == "Poodle"
})
const descontoPoodle = racaPoodle.map((raca)=>{
    return "Você ganhou um cupom de desconto de 10% para tosar o/a " + raca.nome + "!"
})
console.log(descontoPoodle)


//Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item
 const nomesProdutos = produtos.map((nome)=>{
    return nome.nome
 })
 console.log(nomesProdutos)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
let produtosComDesconto = produtos.map((produtos) => {
    const desconto = (produtos.preco * 5) / 100
    return {nome: produtos.nome, preco:(produtos.preco-desconto).toFixed(2)}
})
console.log(produtosComDesconto)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 const listaBebidas = produtos.filter((item)=>{
     return item.categoria == "Bebidas"
 })
 console.log(listaBebidas)

//)d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
 const produtosYpe = produtos.filter((item)=>{
     return item.nome.includes("Ypê")
 })
 console.log(produtosYpe)

 //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const propagandaYpe = produtosYpe.map((item)=>{
    console.log(`Compre ${item.nome} por ${item.preco}`)
})

// ------ DESAFIOS ------ //

//Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
const nomesPokemons = pokemons.map((item)=>{
    return item.nome
})
console.log(nomesPokemons.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const filtrarTiposPokemons = pokemons.map((item)=>{
    return item.tipo
})
let tiposPokemons = [...new Set(filtrarTiposPokemons)]
console.log(tiposPokemons)

/*forma reduzida
let tiposPokemons = [...new Set(pokemons.map((item)=>{
    return item.tipo
}))]
console.log(tiposPokemons)
*/