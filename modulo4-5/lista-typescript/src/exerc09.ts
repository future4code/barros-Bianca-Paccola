//O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX. Para a construção de um número de CPF as seguintes regras são aplicadas.
// - Os oito primeiros dígitos são os número-base
// - O nono dígito é a região fiscal
// - O penúltimo dígito é o dígito verificador (DV) módulo 11 dos nove dígitos anteriores
// - O último dígito é o DV módulo 11 dos dez dígitos anteriores
//Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” e faça uma validação do valor recebido. Caso o CPF recebido seja válido retorne um True e caso seja inválido retorne False

function cpfValidator (cpf: string) : boolean {
let cpfArray = cpf.replaceAll(".", "").replaceAll("-", "").split("").map(Number)
    
    let penultDV = 0;
    let sum1 = 10;

    for (let i = 0; i < 9; i++) {
        penultDV += cpfArray[i] * sum1;
            sum1--;  
    }

    penultDV = penultDV % 11;

    if ((11 - penultDV) < 10 ){
        penultDV = 11 - penultDV;
    } else {
        penultDV = 0;
    }

    let lastDV = 0;
    let sum2 = 11;

    for (let i = 0; i < 9; i++) {
        lastDV += cpfArray[i] * sum2;
        sum2--;  
    }
    
    lastDV += penultDV * 2
    lastDV = 11 - (lastDV % 11)

    if (lastDV >= 10) {
        lastDV = 0;
    }

    if(cpfArray[cpfArray.length - 1] === lastDV && cpfArray[cpfArray.length -2] === penultDV) {
        return true;
    } else {
        return false;
    } 

}

console.log(cpfValidator("145.382.206-20"));
