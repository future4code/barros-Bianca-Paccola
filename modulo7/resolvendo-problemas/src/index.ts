/*
- Exercício 2
    
    Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial
*/
const compress = (str: string):string => {
    let contador = 1;
    let arr:string[] = []
  for(let i =0; i < str.length; i++) {
    if (str[i+1] === str[i]) {
      contador++
    } else {
      arr.push(str[i])
      arr.push((contador.toString()))
      contador = 1
    }
  }
  const result = arr.join('');
  return result.length > str.length ? str : result;
}
// Testes
console.log(compress('aabbb')) // a2b3
console.log(compress('aabcccccaaa')) // a2b1c5a3
console.log(compress('accurate')) // accurate
console.log(compress('escola')) // escola
console.log(compress('accuraaaaaaaaaate')) // a1c2u1r1a10t1e1

// ------------ Fazer a compressão sem ser em sequência --------------- //
const stringCompress = (str: string): string => {
    const stringObg: {[key: string]: number;} = {}
    for(let char of str) {
        if(stringObg[char]) {
            stringObg[char]++
        } else {
            stringObg[char] = 1
        }
    }

    let aux: string = ''
    for (let char in stringObg) {
        aux += char
        aux += stringObg[char]
    }
    
    return aux;
}

console.log(stringCompress("aabcccccaaa"))