// Escreva uma função recursiva que:
// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
function printNumbersAsc(n: number): void {
    if (n >= 0) {
        printNumbersAsc(n-1)
        console.log(n)
    }
}
// printNumbersAsc(5)

// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
function printNumbersDesc(n: number): void {
    if (n >= 0) {
        console.log(n)
        if(n > 0) {
            printNumbersDesc(n-1)
        }
    }
}
// printNumbersDesc(5)

// Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
function sum (n: number, add:number = 0): void { 
    if (n > 0) {
        sum(n-1, add+n)
    }
    if (n == 0) {
        console.log(add)
    }
}
//sum(5)

// Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
function sum2 (n: number):void {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        counter += n
    }
    console.log(counter);
}
//sum(5);

// Escreva uma função recursiva que consiga imprimir todos os elementos de um array
function printArray (array: any[], index:number = 0):void {
    if (index < array.length) {
        console.log(array[index])
        printArray(array, index+1)
    }
}
printArray(["Uva", "Maçã", "Pêssego"])