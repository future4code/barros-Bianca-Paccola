const inputUser = require("readline-sync");

(function imprimeTresCoresFavoritas () : void {
    const cor1: string = inputUser.question("Insira sua primeira cor favorita: ")
    const cor2: string = inputUser.question("Insira sua segunda cor favorita: ")
    const cor3: string = inputUser.question("Insira sua terceira cor favorita: ")
    console.log([cor1, cor2, cor3])
 } () )