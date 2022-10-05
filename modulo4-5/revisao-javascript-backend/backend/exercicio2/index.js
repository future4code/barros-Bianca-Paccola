// Crie um programa que insere um novo cliente no array de clientes.
// Depois de finalizar a implementação básica, trate os valores de entrada. Um cliente deve sempre possuir uma id numérica única e um nome em string sem caracteres especiais.

const clientsList = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

function addClient (id, clientName) {

    if(typeof id !== 'number' || id < 0) {
        return "Erro. Parâmetro inválido: passar um número real."
    }

    if(clientsList.some(elem => elem.id === id)) {
        return "Erro. Parâmetro inválido: id já existe. "
    } 
    
    if (/^[A-Za-z]+$/.test(clientName)) {
        clientsList.push({id: id, nome: clientName})
        return "Usuário cadastrado com sucesso!"
    } else {
        return "Não permite nome com caracteres especiais!"
    }
}

console.log(addClient(20, 'Manoela'));
console.log(clientsList)
