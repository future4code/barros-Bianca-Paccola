type Estatisticas = {
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros: number[]): Estatisticas{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([5,10,15,20]));

//
type Amostra = {
    numeros: number[],
    funcao: (numeros: number[]) => Estatisticas;
}

const amostraDeIdades: Amostra = {
    numeros: [20, 15, 25, 32, 54, 19],
    funcao: obterEstatisticas
}

console.log(amostraDeIdades.funcao(amostraDeIdades.numeros))
