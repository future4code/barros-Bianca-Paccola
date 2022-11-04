// Neste exercício, você vai implementar uma funcionalidade importante de uma loja de roupas o valor final do produto durante a black friday. Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. Cada uma tem a sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas). 
// a) Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"

import {produtos} from "./listaProdutos"
import {Produto} from "./listaProdutos"

function blackFriday (array: Produto[] ): Produto[] {
    const promocao = array.map((produto) => {
        const desc = (produto.preco * (100 - produto.desconto)/100).toFixed(1)
        return {nome: produto.nome, preco: produto.preco, classificacao: produto.classificacao, desconto: Number(desc)}})

    return promocao;
}

console.table(blackFriday(produtos))