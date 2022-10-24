//Faça uma nova função que receba o array de estoque como parâmetro, use a função ajustaPreco para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto. 

type Product = {
    name: string,
    quantity: number,
    unitValue: number
}

type ProductUpdatePrice = {
    name: string,
    quantity: number,
    unitValue: string;
}

let products = [
	{ name: "MacMugffin", quantity: 37, unitValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, unitValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, unitValue: 571.5},
	{ name: "O precioso", quantity: 1, unitValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, unitValue: 17},
	{ name: "Plumbus", quantity: 13, unitValue: 140.44},
	{ name: "Pokebola", quantity: 200, unitValue: 99.9915}
]

const adjustPrice = (price :number): string => {
	const adjustedValue: string = price.toFixed(2).replace('.', ',')
	return "R$ "+adjustedValue
}

function updateCurrency(array: Product[]) : ProductUpdatePrice[] {
    return array.map((product) => {
        return {name: product.name, quantity: product.quantity, unitValue: adjustPrice(product.unitValue)};
    }).sort((a, b) => a.quantity - b.quantity)
}

console.log(updateCurrency(products));



