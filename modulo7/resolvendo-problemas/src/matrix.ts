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

let matrix1 = new Array(3)
matrix1[0] = [5,7,8]
matrix1[1] = [6,2,1]
matrix1[2] = [3,9,4]

let matrix2 = new Array(3)
matrix2[0] = [3,2,1]
matrix2[1] = [5,4,6]
matrix2[2] = [9,7,8]

const replaceMatrixValue = (matrix: number[][], indexRow: number, indexCol: number, value:number):void => {
  if(!matrix[indexRow] || !matrix[indexRow][indexCol]) {
    console.error("\x1b[31mError: Out of array range");
  } else {
    matrix[indexRow][indexCol] = value
  }
  
  console.table(matrix);
}
replaceMatrixValue(matrix1, 1, 1, 6);


/*
  a. Implemente uma função que receba uma matriz e imprima, no console, todos os seus elementos
*/
const printMatrix = (matrix: number[][]): void => {
  for(let index of matrix) {
    for(let element of index) {
      console.log(element)
    }
  }
}

printMatrix(matrix1);

/*
b. Implemente uma função que receba duas matrizes e devolva a soma delas
*/
const sumMatrix = (matrix1: number[][], matrix2: number[][]): void => {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    console.error("\x1b[31mError: Out of array range");
  }

  let matrixResult:number[][] = [];

  for(let i = 0; i < matrix1.length; i++) {
    let rows:number[] = []
    for(let j = 0; j < matrix1[i].length; j++) {
      rows.push(matrix1[i][j] + matrix2[i][j])
    }
    matrixResult.push(rows)
  }

  console.table(matrixResult);
}
sumMatrix(matrix1, matrix2)

/*
c. Implemente uma função que receba uma matriz e devolva a sua matriz transposta
*/
const transposedMatrix = (matrix: number[][]): void => {

  let matrixResult:number[][] = [];

  for(let i = 0; i < matrix[0].length; i++) {
    let rows:number[] = []
    for(let j = 0; j < matrix.length; j++) {
      rows.push(matrix[j][i])
    }
    matrixResult.push(rows)
  }

  console.log(matrixResult);
}
transposedMatrix([[-1,0],[3,6],[8,-4]]) //[[-1,3,8],[0,6,-4]]


/*
- Exercício 5
    
    [Amazon] Considere que você tenha uma matriz de números cujas linhas e colunas estejam ordenadas da menor para a maior. Determine a quantidade de números negativos que há dentro da matriz.
*/

const negativeNumbersCount = (matrix: number[][]):number => {
  let counter = 0
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] < 0) counter++;
    }
  } 
  return counter;
}
console.log(negativeNumbersCount([
  [-3, -2, -1, 1],
  [-2, 2, 3, 4],
  [4, 5, 7, 8]
])) //4