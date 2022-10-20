// Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. 
//Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.
// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
// b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.
// c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.
// d) Escreva uma função que determine o lucro do restaurante.

import {pratos} from "./listaPratos"
import {Prato} from "./listaPratos"

import {pedidos} from "./listaVendas"
import {Pedido} from "./listaVendas"

function cadastraPrato (prato: Prato) : Prato[] {
    pratos.push(prato)
    return pratos;
}

const novoPrato: Prato = {
    nome: "Mousse de Maracujá",
    custo: 9.00,
    valorVenda: 13.90,
    ingredientes: [
        "maracujá",
        "creme de leite",
        "leite condensado",
        "gelatina incolor"
    ]
}

console.table(cadastraPrato(novoPrato));

function addVenda (venda: Pedido) : Pedido[] {
    pedidos.push(venda)
    return pedidos;
}

const novaVenda: Pedido = {
    prato: "Salmão Grelhado",
    cliente: "Bianca Paccola"
}

console.log(addVenda(novaVenda))

function consultaPreco (prato: string) : number {
    const findPrato = pratos.find(p => p.nome === prato)
    return findPrato.valorVenda;
}

console.log(consultaPreco("Mousse de Chocolate"));

function lucroVendas (pratos: Prato[], vendas: Pedido[]):number {
    const pratosVendidos = vendas.map((venda)=> venda.prato)
    let somaVendas = 0;
    let somaCustos = 0;
    
    for(let i = 0; i < pratosVendidos.length; i++) {
        for(let j = 0; j < pratos.length; j++) {
            if(pratosVendidos[i] === pratos[j].nome) {
                somaVendas += pratos[j].valorVenda;
                somaCustos += pratos[j].custo;
            }
        }
    }

    const total = (somaVendas - somaCustos).toFixed(2);
    return Number(total);
}

console.log(lucroVendas(pratos, pedidos));