/*
- Exercício 2
    
    Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial
*/

function stringCompress (str: string): string {
    let strSplit = str.split('')
    let c = ''
    let arr = []
    for(let char of strSplit) {

    }

    return '';
}

console.log(stringCompress("abc"))


// function stringCompress (str: string): string {
//     const stringObg: {[key: string]: number;} = {}
//     for(let char of str) {
//         if(stringObg[char]) {
//             stringObg[char]++
//         } else {
//             stringObg[char] = 1
//         }
//     }

//     let aux: string = ''
//     for (let char in stringObg) {
//         aux += char
//         aux += stringObg[char]
//     }
    
//     return aux;
// }

// console.log(stringCompress("aabcccccaaa"))