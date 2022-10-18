//Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operation = process.argv[2]
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);
const green = "\x1b[32m"
const red = "\x1b[31m"

if(!number1 || !number2) {
    console.log(`${red}Enter the operation and 2 numbers as arguments.`);
} else {
    mathOperation(number1, number2);
}

function mathOperation (number1, number2) {
    switch (operation) {
        case "add" || "addition": 
            console.log(`${green}${number1} plus ${number2} is: ${number1 + number2}`)
            break;
        case "sub" || "subtraction":
            console.log(`${green}${number1} minus ${number2} is: ${number1 - number2}`)
            break;
        case "mult" || "multiplication": 
            console.log(`${green}${number1} times ${number2} is: ${number1 * number2}`)
            break;
        case "div" || "division": 
            console.log(`${green}${number1} divided by ${number2} is: ${number1 / number2}`)
            break;
        default: 
            console.log(`${red}Choose the operation: addition, subtraction, multiplication or division`);
    }
}