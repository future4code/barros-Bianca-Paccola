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

//  - Exercício 5
  // Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade Da maior eficiência/performance para a menor
    //RESPOSTA:  3 → 1 = 2 → 4

// EXERCÍCIO 06
function product(a: number, b: number): number {
    let sum = 0;
    for (let i = 0; i < b; i++) {
      sum += a;
    }
    return sum
  }

    //REPOSTA:  RESPOTA: O algortimo acima tem complexidade O(n), pois o laço itera sobre o parametro da função (b) que é um valor variável...

// EXERCÍCIO 07
function mod(a: number, b: number): number {
    if (b <= a) {
      return -1;
    }
    let div = a / b;
    return a - div * b;
  }

  // RESPOSTA: O algoritmo acima tem complexidade O(1) pois ele não possui iteração com valores variáveis

//EXERCICIO 07
  function copyArray(array: number[]): number[] {
    let copy: number[] = [];
    for (const value of array) {
      copy = appendToNew(copy, value);
    }
    return copy;
  }
  
  function appendToNew(array: number[], value: number) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
  }

  // RESPOSTA: appendToNew tem complexidade O(n) pois tem um loop que itera sobre um parâmetro variável (array).
  // Já copyArray tem variável O(n²), pois ele itera sobre uma variável e dentro da iteração ele chama a outra função.. tendo assim, a complexidade de um laço aninhado.

