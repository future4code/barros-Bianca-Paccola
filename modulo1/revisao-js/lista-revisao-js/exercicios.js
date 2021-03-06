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
    for (i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    /*function ordenar(a, b) {
        return (a - b)
    }
    return array.sort(ordenar)*/

    //DESAFIO
    for (let i = 0; i < array.length; i++){
        let arrayAux
        if (i < array.length-1){
            let indice2 = i + 1
                for (let indice1 = 0; indice1 < array.length; indice1++){
                    if (array[indice1] > array[indice2]){
                        arrayAux = array[indice1]
                        array[indice1] = array[indice2]
                        array[indice2] = arrayAux
                    }
                }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /*let novoArray = []
    array.filter((item) => {
        if (item % 2 == 0) {
            novoArray.push(item)
        }
    })
    return novoArray*/

    //DESAFIO
    let novoArray = []
    for(indice of array){
        if (indice % 2 == 0){
            novoArray.push(indice)
        }
    }
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    //retorna os pares
    let novoArray = []
    array.filter((item) => {
        if (item % 2 == 0) {
            novoArray.push(item ** 2) //potenciação
        }
    })
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let indiceMaior
    for (let i = 0; i < array.length; i++) {
        let j = i + 1
        for (let k = 0; k < array.length; k++)
            if (array[k] > array[j]) {
                indiceMaior = array[k]
            }
    }
    return indiceMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    if (num1 > num2) {
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor == 0 ? true : false,
        diferenca: maior - menor
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    contador = [0]
    i = 0
    while (contador.length < n) {
        i += 2
        contador.push(i)
    }
    return contador
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    function ordenar(a, b) {
        return (a - b)
    }
    array.sort(ordenar)
    segundoMaior = array[array.length - 2]
    segundoMenor = array[1]
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = { ...pessoa }
    pessoaAnonima.nome = "ANÔNIMO"

    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    pessoasAutorizadas = pessoas.filter((item) => {
        return item.idade > 14 && item.idade < 60 && item.altura >= 1.5
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    pessoasNaoAutorizadas = pessoas.filter((item) => {
        return item.idade <= 14 || item.idade >= 60 || item.altura < 1.5
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14    // SÓ EU E DEUS SABEMOS O QUANTO ESSE EXERCÍCIO FOI UMA VITÓRIA PARA MIM, POIS CHEGUEI A PENSAR QUE NUNCA IRIA CONSEGUIR!!!

function retornaContasComSaldoAtualizado(contas) {
    // soma as compras!!! e cria um array com os totais de cada um     
    let saldo = contas.map((item) => {
        return item.compras.reduce((valor1, valor2) => {
            return valor1 + valor2
        }, 0)
    })
    //subtrai o saldo do total de compras
    for (let i = 0; i < contas.length; i++) {
        contas[i].saldoTotal -= saldo[i]
        contas[i].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let listaConsultasOdemAlf = consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      });
 
    return listaConsultasOdemAlf  
}

// EXERCÍCIO 15B - DESAFIO
function retornaArrayOrdenadoPorData(consultas) {
    //Transforma a data em array
    let datas = consultas.map((item)=>{
        return {nome: item.nome, dataDaConsulta: item.dataDaConsulta.split('/'),}
    })
    //Sorteia por odem crescente
    for (let i = 0; i < datas.length; i++){
        datas.sort((a,b)=>{
        if (a.dataDaConsulta[i] > b.dataDaConsulta[i]) {
            return 1;
        }
        else if (a.dataDaConsulta[i] < b.dataDaConsulta[i] ) {
            return -1;
        }
        return 0;
    })}
    //Volta a data para string
    let consultasPorData = datas.map((item)=>{
        return {nome: item.nome, dataDaConsulta: item.dataDaConsulta.join('/')}
    })
    return consultasPorData
}