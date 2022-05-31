```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contador = 0;
  for(indice of arrayDeNumeros){
    if (indice == numeroEscolhido){
      contador ++
    }
  }
  if (contador > 0){
    return `O número ${numeroEscolhido} aparece ${contador}x`
  } else {
    return "Número não encontrado"
  }
}