/* ----------- DETERMINAR A COMPLEXIDADE DOS CÓDIGOS ABAIXO ------------ */

// EXERCÍCIO 01
const findFirstRecurringCharacter = (input) => {
    const charHashMap = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  }; 
  
  // RESPOTA: O algortimo acima tem complexidade O(n), pois o laço itera sobre o parametro da função (input) que é um valor variável...


// EXERCÍCIO 02
export const func = (
    source: string,
    comparison: string
  ): boolean => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false;
    }
    let commonCharQuantity = 0;
  
    for (const char of comparison) {
      if (source !== comparison) {
        commonCharQuantity++;
      }
    }
    return (
      commonCharQuantity <= source.length + 1 &&
      commonCharQuantity >= source.length - 1
    );
  };

  //REPOSTA:  RESPOTA: O algortimo acima tem complexidade O(n), pois o laço itera sobre o parametro da função (comparsion) que é um valor variável...

//EXERCÍCIO 03
export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }
  
    matrix[rowIndex][columnIndex] = value;
  };

  // RESPOSTA: O algoritmo acima tem complexidade O(1) pois ele não possui iteração com valores variáveis

//EXERCÍCIO 04

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }

  // RESPOSTA: O algoritmo acima tem complexidade de O(n²), pois existe um loop aninhando que recebe um parâmetro variável (listOfNumbers). O método indexOf é um método de iteração...

// Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade

