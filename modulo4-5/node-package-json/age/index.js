// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// A partir do process.argv[2]

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem

const firstName =  process.argv[2];
const age = Number(process.argv[3]);
const rgxName = /[A-Z-a-z]$/.test(firstName)

if(!firstName || !age || age < 0 || !rgxName) {
    console.log("\x1b[31mEnter 2 arguments: your name and your age.")
} else {
console.log(`\x1b[32mHello, ${firstName}! You are ${age} years old. In seven years you will be ${7 + age} years old.`)
}