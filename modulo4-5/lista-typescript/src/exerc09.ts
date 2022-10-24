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

    console.log(penultDV)

    let lastDV = 0;
    let sum2 = 11;

    for (let i = 0; i < 9; i++) {
        lastDV += cpfArray[i] * sum2;
        sum2--;  
    }

    lastDV = lastDV % 11;

    if ((11 - lastDV) < 10 ){
        lastDV = 11 - lastDV;
    } else {
        lastDV = 0;
    }

    if(cpfArray[cpfArray.length - 1] === lastDV && cpfArray[cpfArray.length -2] === penultDV) {
        return true;
    } else {
        return false;
    } 

}

console.log(cpfValidator("407.919.448-08"));
