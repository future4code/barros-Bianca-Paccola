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
// printArray(["Uva", "Maçã", "Pêssego"])

// Escreva uma função recursiva que determine a quantidade de digitos de um número
function getDigits (n: number, index:number = 0):void {
    if(index < n.toString().length) {
        getDigits(n, index+1)
    } else {
        console.log(index)
    }
}
// getDigits(555555);

// Escreva uma função recursiva que determine o maior valor de um array que contenha somente números positivos 
function getPositives(array: number[], index: number = 0, aux:number = 0) {
    if (index < array.length) {
        if(array[index] > aux) {
            aux = array[index];
        }
        getPositives(array, index+1, aux)
    } else {
        console.log(aux);
    }
}
// getPositives([10,1,55,20,35])

// Escreva uma função recursiva que determine o primeiro caractere maiúsculo de uma string
function getUpperChar (str: string, index:number = 0, aux:string = 'a', verify:boolean = true):void {
    if(index < str.length && verify) {
        if(str[index] < aux && verify) { // O VERIFY NESSA LINHA FUNCIONA COMO UM 'BREAK'
            aux = str[index]
            verify = !verify
        }
        getUpperChar(str, index+1, aux, verify)
    } else {
        console.log(aux);
    }
}

const inicio = performance.now();
getUpperChar("aMANDA")
const fim = performance.now();

console.log(`A operação levou ${fim - inicio} milissegundos`);
