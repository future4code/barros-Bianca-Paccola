// Crie um programa que insere um novo cliente no array de clientes.
// Depois de finalizar a implementação básica, trate os valores de entrada. Um cliente deve sempre possuir uma id numérica única e um nome em string sem caracteres especiais.

const clientsList = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

function addClient(objeto) {
  if (typeof objeto.id !== "number" || objeto.id < 0) {
    return "Erro. Parâmetro inválido: passar um número real.";
  }

  if (clientsList.some((elem) => elem.id === objeto.id)) {
    return "Erro. Parâmetro inválido: id já existe. ";
  }

  if (/^[A-Za-z]+$/.test(objeto.nome)) {
    clientsList.push({ id: objeto.id, nome: objeto.nome });
    console.log(clientsList);
    return "Usuário(a) cadastrado(a) com sucesso!";
  } else {
    return "Não permite nome com caracteres especiais!";
  }
}

console.log(addClient({ id: 5, nome: "Manoela" }));


// Crie um gerador de tabuada.
// O argumento deve ser um número entre 1 a 10 e só deve aceitar tipo numérico.

function tabuada(multiplicador) {
  if (multiplicador < 1 || multiplicador > 10) {
    console.log(
      "Erro. Parâmetro inválido (’número precisa valer entre 1 e 10’)"
    );
  } else if (typeof multiplicador !== "number") {
    console.log("Erro. Parâmetro inválido (’deve ser um número’).");
  } else {
    for (let i = 0; i < 11; i++) {
      console.log(`${multiplicador}x${i} = ${multiplicador * i}`);
    }
  }
}

tabuada(5);
