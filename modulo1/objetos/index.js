/* EXERCÍCOS DE INTERPRETAÇÃO DE CÓDIGO

1 - A) Matheus Nachtergaele
       Virginia Cavendish
       canal: Globo  horario: 14h

2- A) nome: Juca  idade: 3  raca: SRD
      nome: Juba  idade: 3  raca: SRD
      nome: Jubo  idade: 3  raca: SRD       

   B) copia as propriedades do objeto para outro objeto, que podem ainda ser modificadas ou acrescentadas novas propriedades conforme a necessidade.

3 - A) false
       undefined

     B) false pq o valor da chave é booleano; e undefined pq a chave chamada no parâmetro da função não foi definida dentro do objeto

*/

// --- EXERCÍCIOS DE ESCRITA DE CÓDIGO --- //

// Exercício 01
const meuDog = {
    nome: "Bobby",
    apelido: ["Bubis", "Tubis", "Salsicha"]
}

function dog (objeto){
    console.log(`Eu sou o ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]}, ou ${objeto.apelido[2]}.`)
}

dog(meuDog)

// Exercício 02
const pessoa1 = {
    nome: "Maria",
    idade: 32,
    profissao: "Dentista"
}

const pessoa2 = {
    nome: "José",
    idade: 43,
    profissao: "Militar"
}

function pessoas (objeto1, objeto2) {
    return [
    {nome: objeto1.nome, caracteres: objeto1.nome.length},
    {nome: objeto2.nome, caracteres: objeto2.nome.length},
    {idade: objeto1.idade},
    {idade: objeto2.idade},
    {profissao: objeto1.profissao, caracteres: objeto1.profissao.length },
    {profissao: objeto2.profissao, caracteres: objeto2.profissao.length}   
    ]
}
console.log(pessoas(pessoa1, pessoa2))

//Exercício 03
let carrinho = []

let melao = {
    nome: "Melão",
    disponibilidade: true
}

let manga = {
    nome: "Manga",
    disponibilidade: true
}

let morango = {
    nome: "Morango",
    disponibilidade: true
}

function frutas (fruta1, fruta2, fruta3){
    return carrinho.push(fruta1, fruta2, fruta3)
}

frutas(melao, manga, morango)
console.log(carrinho)

// --- DESAFIOS --- //


// Desafio01
function infoUsuario(){
nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")
profissao = prompt("Digite sua profissão: ")
let informacoes = {
    nome,
    idade,
    profissao
}
console.log(informacoes)
console.log(typeof informacoes)
}

infoUsuario()

//Desafio02
function filmes() {
const filme1 = {
nome: "Matrix",
lancamento: 1999
}
const filme2 = {
nome: "Interestelar",
lancamento: 2014
}
console.log("O primeiro filme foi lançado antes do segundo? ", filme1.lancamento < filme2.lancamento)
console.log("O primeiro filme foi lançado no mesmo ano do segundo? ", filme1.lancamento == filme2.lancamento)
}

filmes()

//Desafio 03
function estoqueFruta(fruta){
return fruta = fruta.disponibilidade = false
}

estoqueFruta(melao)

console.log(melao)



