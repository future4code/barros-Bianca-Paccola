/*
- Exercício 1
    
    Considere que a gente só possa fazer três operações com `string`: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma `string` é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma `string` é  'one edit' de outra.
*/

function isOneEdit(strA: string, strB: string): boolean {
  // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
  if (Math.abs(strB.length - strA.length) > 1) return false

  // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
  if (strA.length > strB.length) return strA.includes(strB)
  if (strB.length > strA.length) return strB.includes(strA)

  // Não deve ter mais que uma letra diferente
  let charsDiffCount = 0
  for (let i = 0; i < strA.length; i++) {
      if (strA[i] !== strB[i]) charsDiffCount++
  }

  // Retorna true se a diferença é 1, false caso contrário
  return charsDiffCount === 1
}
console.log(isOneEdit('banan', 'banana')) //true
console.log(isOneEdit('bananak', 'banana')) //true
console.log(isOneEdit('panana', 'banana')) //true
console.log(isOneEdit('bananaaa', 'banana')) //false


/*
- Exercício 2
    
    Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial
*/
const compress = (str: string):string => {
    let contador = 1;
    let arr:string[] = []
  for(let i =0; i < str.length; i++) {
    if (str[i+1] === str[i]) {
      contador++
    } else {
      arr.push(str[i])
      arr.push((contador.toString()))
      contador = 1
    }
  }
  const result = arr.join('');
  return result.length > str.length ? str : result;
}
// Testes
console.log(compress('aabbb')) // a2b3
console.log(compress('aabcccccaaa')) // a2b1c5a3
console.log(compress('accurate')) // accurate
console.log(compress('escola')) // escola
console.log(compress('accuraaaaaaaaaate')) // a1c2u1r1a10t1e1


// ------------ Fazer a compressão sem ser em sequência --------------- //
const stringCompress = (str: string): string => {
    const stringObg: {[key: string]: number;} = {}
    for(let char of str) {
        if(stringObg[char]) {
            stringObg[char]++
        } else {
            stringObg[char] = 1
        }
    }

    let aux: string = ''
    for (let char in stringObg) {
        aux += char
        aux += stringObg[char]
    }
    
    return aux;
}

console.log(stringCompress("aabcccccaaa"))

/*
- Exercício 3
    Uma Matriz é uma estrutura bidimensional que pode possuir elementos em linhas e colunas. Como mostrado abaixo:
    
    ```tsx
    1 2 3
    4 5 6
    7 8 9
    ```
    
    Nesse caso, o elemento da linha 3 e coluna 2 é o 8; o elemento da linha 2 e coluna 3 é o 6 e assim por diante. Sobre isso, responda as perguntas abaixo:
    
    a. Como podemos representar uma Matriz em Typescript?
    RESPOSTA: construindo um array de arrays.. o índice de cada array representa um linha, enquanto o índice de cada item dentro do array representa uma coluna.
    
    b. Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. Essa função deve alterar o elemento das linha e coluna em questão pelo valor passado. (Caso não tenha nenhum valor nos índices passados, retorne um erro: `Fora do intervalo da matriz`)
*/

let matrix = new Array(3)
matrix[0] = [5,7,8]
matrix[1] = [6,2,1]
matrix[2] = [3,9,4]

function replaceMatrixValue (matrix: number[][], indexRow: number, indexCol: number, value:number):void {
  if(!matrix[indexRow] || !matrix[indexRow][indexCol]) {
    throw console.error("\x1b[31mError: Out of array range");
  } else {
    matrix[indexRow][indexCol] = value
  }
  
  console.table(matrix);
}

console.log(replaceMatrixValue(matrix, 1, 1, 6))