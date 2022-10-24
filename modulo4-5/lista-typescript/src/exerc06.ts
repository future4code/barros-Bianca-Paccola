//Criar uma função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type Client = {
    client: string;
    totalBalance: number;
    debits : number[];
}

let clients = [
	{ client: "João", totalBalance: 1000, debits: [100, 200, 300] },
	{ client: "Paula", totalBalance: 7500, debits: [200, 1040] },
	{ client: "Pedro", totalBalance: 10000, debits: [5140, 6100, 100, 2000] },
	{ client: "Luciano", totalBalance: 100, debits: [100, 200, 1700] },
	{ client: "Artur", totalBalance: 1800, debits: [200, 300] },
	{ client: "Soter", totalBalance: 1200, debits: [] }
]

function getDebitAccount (array: Client[]) : Client[] {
    const sumDebbits = array.map((account)=>{
        return {client: account.client, totalBalance: account.totalBalance - account.debits.reduce((value1, value2)=> {
            return value1 + value2
        },0), debits: []}
    }).filter((account)=> account.totalBalance < 0);

    return sumDebbits;
}

console.log(getDebitAccount(clients));
