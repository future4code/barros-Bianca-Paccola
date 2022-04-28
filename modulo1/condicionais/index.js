/* ---> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

   1 - a) Ele verifica se o número é divisível por 2 usando o módulo %. Se o resto da divisão do número digitado pelo usuário por 2 for 0, ele retorna "Passou no teste". Caso contrário "Não passou no teste."
       b) Divisíveis por 2, ou seja, números pares.
       c) Números ímpares

   2 - a) Para verificar a fruta que o usuário digitar no prompt e informar o seu valor.
       b) "O preço da fruta maçã é R$ 2.25"
       c) Se tirarmos o break o javascript continua lendo o código e para no default, assim o preço exibido seria R$ 5.00 ao invés de R$ 5.5

   3 - a) A pirmeira linha pede para o usuário informar um número através do prompt.
       b) 10 = passou no teste  /  -10 = undefined
       c) Terá erro porque a variável mensagem está dentro do if e a chamada dela pelo console.log está fora do if. Assim a variável é considerada local, e para o console exibi-lá, ou ela teria que estar declarada fora do if ou o console deveria estar dentro do if.

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:
// EXERCÍCIO 01
let idadeUsuario = Number(prompt("Digite sua idade"))
if (idadeUsuario >= 18) {
   console.log("Você pode dirigir")
}
else {
   console.log("Você não pode digir")
}

// EXERCÍCIO 02
/*let turnoAluno = prompt("Informe seu turno: M para matutino, V para vespertino ou N para noturno.")
turnoAluno = turnoAluno.toUpperCase()
if (turnoAluno == "M") {
   console.log("Bom Dia!");
} else if (turnoAluno == "V") {
   console.log("Boa Tarde!");
} else if (turnoAluno == "N") {
   console.log("Boa Noite!");
}*/

// EXERCÍCIO 03
let turnoAluno = prompt("Informe seu turno: M para matutino, V para vespertino ou N para noturno.")
turnoAluno = turnoAluno.toUpperCase()
switch (turnoAluno) {
   case 'M':
      console.log("Bom Dia!")
      break
   case 'V':
      console.log("Boa Tarde!")
      break
   case 'N':
      console.log("Boa Noite!")
      break
}

// EXERCÍCIO 4 --- DESAFIO 1
let generoFilme = prompt("Informe o gênero do filme:")
let precoIngresso = Number(prompt("Insira o valor do ingresso:"))
if (generoFilme == 'fantasia' && precoIngresso <= 15) {
   let lanchinho = prompt("Qual lanchinho deseja comprar?")
   console.log("Bom filme!")
   console.log("Aproveite seu " + lanchinho)
} else {
   console.log("Escolha outro filme :( ")
}

// --- DESAFIO 02 --- //
let nome = prompt("Por favor, digite seu nome completo:")
let tipoJogo = prompt("Digite DO para ingresso de jogo NACIONAL ou SI para ingresso de jogo INTERNACIONAL.")
let escolherJogo = prompt("Escolha o tipo de jogo desejado: SF para Semifinais, DT para Decisão 3° lugar, FI para Final")
let escolherCat = Number(prompt("Escolha a categoria: 1, 2, 3 ou 4"))
let quantidade = Number(prompt("Digite a quantidade de Ingresso desejada:"))
tipoJogo = tipoJogo.toUpperCase()
escolherJogo = escolherJogo.toUpperCase()

const jogosDomesticos = {
   sf: {
      cat1: 1320,
      cat2: 880,
      cat3: 550,
      cat4: 220
   },
   dt: {
      cat1: 660,
      cat2: 440,
      cat3: 330,
      cat4: 170
   },
   fi: {
      cat1: 1980,
      cat2: 1320,
      cat3: 880,
      cat4: 330
   }
}
let ingresso
let estapaDoJogo
let total

function escolhacatjogo() {
   if (escolherJogo == "SF" && escolherCat == 1) {
      ingresso = jogosDomesticos.sf.cat1
      estapaDoJogo = 'Semifinal'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.sf.cat1 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   } else if (escolherJogo == "SF" && escolherCat == 2) {
      ingresso = jogosDomesticos.sf.cat2
      estapaDoJogo = 'Semifinal'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.sf.cat2 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   } else if (escolherJogo == "SF" && escolherCat == 3) {
      ingresso = jogosDomesticos.sf.cat3
      estapaDoJogo = 'Semifinal'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.sf.cat3 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   } else if (escolherJogo == "SF" && escolherCat == 4) {
      ingresso = jogosDomesticos.sf.cat4
      estapaDoJogo = 'Semifinal'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.sf.cat4 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   }
   if (escolherJogo == "DT" && escolherCat == 1) {
      ingresso = jogosDomesticos.dt.cat1
      estapaDoJogo = 'Decisão'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.dt.cat1 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   } else if (escolherJogo == "DT" && escolherCat == 2) {
      ingresso = jogosDomesticos.dt.cat2
      estapaDoJogo = 'Decisão'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.dt.cat2 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   } else if (escolherJogo == "DT" && escolherCat == 3) {
      ingresso = jogosDomesticos.dt.cat3
      estapaDoJogo = 'Decisão'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.dt.cat3 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   }

   else if (escolherJogo == "DT" && escolherCat == 4) {
      ingresso = jogosDomesticos.dt.cat4
      estapaDoJogo = 'Decisão'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.dt.cat4 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   }

   if (escolherJogo == "FI" && escolherCat == 1) {
      ingresso = jogosDomesticos.fi.cat1
      estapaDoJogo = 'Final'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.fi.cat1 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   }

   else if (escolherJogo == "FI" && escolherCat == 2) {
      ingresso = jogosDomesticos.fi.cat2
      estapaDoJogo = 'Final'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.fi.cat2 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   }

   else if (escolherJogo == "FI" && escolherCat == 3) {
      ingresso = jogosDomesticos.fi.cat3
      estapaDoJogo = 'Final'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.fi.cat3 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   } else if (escolherJogo == "FI" && escolherCat == 4) {
      ingresso = jogosDomesticos.fi.cat4
      estapaDoJogo = 'Final'
      if (tipoJogo == "DO") {
         ingresso = ingresso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
         total = jogosDomesticos.fi.cat4 * quantidade
         total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      } else if (tipoJogo = "SI") {
         ingresso = (ingresso * 4.10)
         total = ingresso * quantidade
         ingresso = ingresso.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
         total = total.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })
      }
   }
}
escolhacatjogo()

switch (tipoJogo) {
   case "DO":
      tipoJogo = 'Nacional'
      break;
   case "SI":
      tipoJogo = 'Internacional'
      break;
   default:
      tipoJogo = 'ERRRRRRR'
      break;
}
console.log(
   `--- Dados da compra ---
     Nome do Cliente: ${nome}
     Tipo do Jogo: ${tipoJogo}
     Etapa do Jogo: ${estapaDoJogo}
     Categoria: ${escolherCat}
     quantidade: ${quantidade}
     --- Valores ---
     Valor do Ingresso: ${ingresso}
     Valor Total : ${total}`
)
