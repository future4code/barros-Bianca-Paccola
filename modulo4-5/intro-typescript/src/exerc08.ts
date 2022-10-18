// Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

function stringInvertida (palavra: string) : string {
    return palavra.split("").reverse().join("");
}

console.log(stringInvertida("Bianca"));