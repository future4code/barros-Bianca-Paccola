let cartasUsuario = []
let cartasComputador = []
let valorUsuario = 0
let valorComputador = 0
let encerraJogo = false

if(window.confirm(`Bem-vinde ao jogo de BlackJack! ♣️ ♦️ ♥️ ♠️
Quer iniciar uma nova rodada?`)){
let rodadaUsuario1 = comprarCarta()
let rodadaUsuario2 = comprarCarta()
let rodadaComputador1 = comprarCarta()
let rodadaComputador2 = comprarCarta()
cartasUsuario.push(rodadaUsuario1.texto)
cartasUsuario.push(rodadaUsuario2.texto)
cartasComputador.push(rodadaComputador1.texto)
cartasComputador.push(rodadaComputador2.texto)
valorUsuario += (rodadaUsuario1.valor + rodadaUsuario2.valor)
valorComputador += (rodadaComputador1.valor + rodadaComputador2.valor)
   switch (valorUsuario, valorComputador){
   case valorComputador == 21 || valorUsuario == 21:
   cartasUsuario = []
   cartasComputador = []
   valorUsuario = 0
   valorComputador = 0
   window.alert("O jogo empatou em 22. Será feita uma nova rodada")
   let rodadaUsuario1 = comprarCarta()
   let rodadaUsuario2 = comprarCarta()
   let rodadaComputador1 = comprarCarta()
   let rodadaComputador2 = comprarCarta()
   cartasUsuario.push(rodadaUsuario1.texto)
   cartasUsuario.push(rodadaUsuario2.texto)
   cartasComputador.push(rodadaComputador1.texto)
   cartasComputador.push(rodadaComputador2.texto)
   valorUsuario += (rodadaUsuario1.valor + rodadaUsuario2.valor)
   valorComputador += (rodadaComputador1.valor + rodadaComputador2.valor)
   }
} else {
   encerraJogo = true
   window.alert("O Jogo acabou.")
}

if (encerraJogo == false){ 
if (window.confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}.
 Deseja comprar mais uma carta?`)){
         let rodadaUsuario3 = comprarCarta()
         do {
         cartasUsuario.push(rodadaUsuario3.texto)
         valorUsuario += rodadaUsuario3.valor
         if(valorUsuario > 21){
            break;
         }else if( valorComputador < 21){
               let rodadaComputador4 = comprarCarta()
               cartasComputador.push(rodadaComputador4.texto)
               valorComputador += rodadaComputador4.valor
            }
         }
         while (window.confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}.
         Deseja comprar mais uma carta?`))
      

   } else {
         if (valorComputador < 21){
         let rodadaComputador3 = comprarCarta()
         cartasComputador.push(rodadaComputador3.texto)
         valorComputador += rodadaComputador3.valor
         }
       }


   if(valorUsuario == 21 || valorUsuario < 21 && valorComputador > 21 || valorUsuario > 21 && valorComputador > valorUsuario || valorUsuario < 21 && valorComputador < 21 && valorUsuario > valorComputador){
   window.alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${valorUsuario}
   Computador - Cartas: ${cartasComputador} - Pontuação: ${valorComputador}
   O usuário ganhou!`)
   } else if (valorUsuario === valorComputador){
 window.alert("O jogo resultou em empate!")
   } else {
   window.alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${valorUsuario}
   Computador - Cartas: ${cartasComputador} - Pontuação: ${valorComputador}
   O computador ganhou!`)
}
}