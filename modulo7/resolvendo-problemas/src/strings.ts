/*
- Exercício 1
    
    Considere que a gente só possa fazer três operações com `string`: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma `string` é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma `string` é  'one edit' de outra.
*/

const isOneEdit = (strA: string, strB: string): boolean =>  {
    // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
    if (Math.abs(strB.length - strA.length) > 1) return false
  
    // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
    if (strA.length > strB.length) return strA.includes(strB)
    if (strB.length > strA.length) return strB.includes(strA)
  
    // Não deve ter mais que uma letra diferente
    let counter = 0
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]) counter++
    }
  
    // Retorna true se a diferença é 1, false caso contrário
    return counter === 1
  }
  // Testes
  console.log(isOneEdit('banan', 'banana')) //true
  console.log(isOneEdit('bananak', 'banana')) //true
  console.log(isOneEdit('panana', 'banana')) //true
  console.log(isOneEdit('bananaaa', 'banana')) //false
  
  
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
  console.log(stringCompress("aabcccccaaa")) //a5b1c5