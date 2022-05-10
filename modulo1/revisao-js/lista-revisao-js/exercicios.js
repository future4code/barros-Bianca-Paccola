// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()
    
    //desafio
    let novoArray = []
    for (i = array.length-1; i >= 0; i--){
       novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenar(a,b){
      return (a-b)
  }
  return array.sort(ordenar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = []
    array.filter((item)=>{
        if(item % 2 == 0){
            novoArray.push(item)
        }
    })
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    //retorna os pares
    let novoArray = []
    array.filter((item)=>{
        if(item % 2 == 0){
            novoArray.push(item ** 2) //potenciação
        }
    })
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let indiceMaior
    for (let i = 0; i < array.length; i++){
        let j = i + 1
            for (let k = 0; k < array.length; k++)
                if (array[k] > array[j]){
                indiceMaior = array[k]
        }
      }
    return indiceMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
        if (num1 > num2){
            maior = num1
            menor = num2
        } else {
            maior = num2
            menor = num1
        }
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor == 0 ? true:false,
        diferenca: maior - menor
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    contador = [0]
    i = 0
   while(contador.length < n){
        i+=2
        contador.push(i)
   }
   return contador 
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    } else if (ladoA === ladoB && ladoA === ladoC){
    return "Equilátero"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}