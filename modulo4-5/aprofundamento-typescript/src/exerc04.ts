// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.
// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
//Resoposta: usando o comando tsc, ou colocando direto na área de scipts do package.json: "tsc && node ./caminho"

// `exercicio-4.ts`

// ```tsx
// type pokemon = {
// 	name: string,
//   types: string,
// 	healthPoints: number
// }

// const pokemon1: pokemon = {
//   name: "Charmander",
//   types: "Fire",
//   healthPoints: 28
// }

// const pokemon2: pokemon = {
//   name: "Bulbasaur",
//   types: "Grass/Poison",
//   healthPoints: 31
// }

// const pokemon3: pokemon = {
//   name: "Squirtle",
//   types: "Water",
//   healthPoints: 35
// }
// ```

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
//Resposta: Sim. Precisa espeficiar o caminho na propriedade rootDir do tsconfig.json

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// Resposta: Existem 2 maneiras. Pode-se usar "tsc ./caminho" e mandar mais arquivos seperados por espaço, ou usar apenas o comando tsc sozinho que ele vai transpilar todos os arquivos .ts que encontrar no projeto.