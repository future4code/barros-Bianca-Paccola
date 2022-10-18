// Para se formar o RNA, devemos realizar a troca das bases nitrogenadas, seguindo a regra: A (adenina) vira U (uracila - específica do RNA); T (timina) vira Adenina (A), C (citosina) vira G(guanina); e G (guanina) vira C (citosina).
// Escreva um programa que converta uma string de DNA em uma string de RNA.

function convertRNA (bases: string) : string {
    let aux = bases.split("")

    for (let i = 0; i < aux.length; i++){
        if(aux[i] === "G") {
            aux.splice(i, 1, "C")
        }  else if (aux[i] === "C") {
            aux.splice(i, 1, "G")
        }
     }
     
     return aux.join("").replaceAll("A", "U").replaceAll("T", "A");
}

console.log(convertRNA("ATTGCTGCGCATTAACGACGCGTA")) // saída: UAACGACGCGUAAUUGCUGCGCAU