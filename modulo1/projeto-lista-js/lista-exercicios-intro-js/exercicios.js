// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
altura = Number(prompt("Digite a altura:"))
largura = Number(prompt("Digite a largura:"))
console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
anoAtual = Number(prompt("Digite o ano atual:"))
anoDeNascimento = Number(prompt("Digite o seu ano de nascimento:"))
console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura) 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Digite seu nome:")
  idade = prompt("Digite sua idade:")
  email = prompt("Digite seu e-email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  primeiraCor = prompt('Digite uma cor:')
  segundaCor = prompt('Digite outra cor:')
  terceiraCor = prompt('Digite mais uma cor:')
console.log([primeiraCor, segundaCor, terceiraCor])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0] 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let primeiraPosicao = array.shift()
let ultimaPosicao = array.pop()

array.push(primeiraPosicao)
array.unshift(ultimaPosicao)

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  anoAtual = Number(prompt("Digite o ano atual"))
  anoNasc = Number(prompt("Digite o ano de nascimento de uma pessoa:"))
  emissaoId = Number(prompt("Digite o ano de emissão da carteira de identidade:"))
  calculoIdade = anoAtual - anoNasc
  calculoId = anoAtual - emissaoId

  condicao20anos = (calculoIdade <= 20) && (calculoId > 5 || calculoId == 5)
  condicao20_50anos = (calculoIdade > 20) && (calculoIdade <= 50) && (calculoId >= 10)
  condicao50ouMais = (calculoIdade > 50) && (calculoId > 15)

  console.log(condicao20anos || condicao20_50anos || condicao50ouMais)
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
let condicao1 = (ano % 100 !== 0) && (ano % 4 == 0)
let condicao2 = (ano % 100 == 0) && (ano % 400 ==0)
 return condicao1 || condicao2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

let maioridade = prompt("Você tem 18 anos? Reposta SIM ou NAO")
let formacao = prompt("Você possui ensino médio completo?  resposta SIM ou NAO")
let disponibilidade = prompt("Possui disponibilidade exclusiva durante o horário do curso? Resposta SIM ou NAO")

console.log(maioridade == "sim" && formacao == "sim" && disponibilidade == "sim")
}