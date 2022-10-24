//A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para mesa, a quantidade é 4! = 24
//Escreva uma função que receba uma palavra (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

function getFactorial (word: string) : number {

    if (word.length === 1) {
        return 1;
    }

    return word.length * getFactorial(word.substring(1)) //Recursion
}

console.log(getFactorial("word"));
