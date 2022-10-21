// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const info = require('readline-sync');

function apresentation (): string {
   const name = info.question("Qual seu nome? ")
   const birthDate = info.question("Qual sua data de nascimento? ").replaceAll("-", "/").split("/")

   return `Olá! Me chamo ${name}, nasci no dia ${birthDate[0]} do mês de ${birthDate[1]} do ano de ${birthDate[2]}.`
}

console.log(apresentation());
