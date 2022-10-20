export type Produto = {
    nome: string,
    preco: number,
    classificacao: string
    desconto?: number
}

enum ClassificacaoProdutos {
    VERAO = "verao",
    INVERNO = "inverno",
    BANHO = "banho",
    INTIMAS = "intimas"
}

enum DescontoPorClasse {
    DESCVERAO = 5,
    DESCINVERNO = 10,
    DESCBANHO = 4,
    DESCINTIMAS = 7
}

export const produtos: Produto[] = [
    {
        nome: 'Vestido longo',
        preco: 99.90,
        classificacao: ClassificacaoProdutos.VERAO,
        desconto: DescontoPorClasse.DESCVERAO
    },
    {
        nome: 'Saia Mid',
        preco: 69.90,
        classificacao: ClassificacaoProdutos.VERAO,
        desconto: DescontoPorClasse.DESCVERAO
    },
    {
        nome: 'Camiseta Branca',
        preco: 44.90,
        classificacao: ClassificacaoProdutos.VERAO,
        desconto: DescontoPorClasse.DESCVERAO
    },
    {
        nome: 'Jaqueta Biker',
        preco: 199.90,
        classificacao: ClassificacaoProdutos.INVERNO,
        desconto: DescontoPorClasse.DESCINVERNO
    },
    {
        nome: 'Moletom Canguru',
        preco: 119.90,
        classificacao: ClassificacaoProdutos.INVERNO,
        desconto: DescontoPorClasse.DESCINVERNO
    },
    {
        nome: 'Vestido longo',
        preco: 99.90,
        classificacao: ClassificacaoProdutos.INVERNO,
        desconto: DescontoPorClasse.DESCINVERNO
    },
    {
        nome: 'Casaco Trench Coat',
        preco: 299.90,
        classificacao: ClassificacaoProdutos.INVERNO,
        desconto: DescontoPorClasse.DESCINVERNO
    },
    {
        nome: 'Biquini Floral',
        preco: 49.90,
        classificacao: ClassificacaoProdutos.BANHO,
        desconto: DescontoPorClasse.DESCBANHO
    },
    {
        nome: 'Maiô Vermelho',
        preco: 99.90,
        classificacao: ClassificacaoProdutos.BANHO,
        desconto: DescontoPorClasse.DESCBANHO
    },
    {
        nome: 'Sunga Preta',
        preco: 39.90,
        classificacao: ClassificacaoProdutos.BANHO,
        desconto: DescontoPorClasse.DESCBANHO
    },
    {
        nome: 'Body Rendado',
        preco: 99.90,
        classificacao: ClassificacaoProdutos.INTIMAS,
        desconto: DescontoPorClasse.DESCINTIMAS
    },
    {
        nome: 'Sutiã Meia Taça',
        preco: 59.90,
        classificacao: ClassificacaoProdutos.INTIMAS,
        desconto: DescontoPorClasse.DESCINTIMAS
    },
    {
        nome: 'Calcinha Rendada',
        preco: 39.90,
        classificacao: ClassificacaoProdutos.INTIMAS,
        desconto: DescontoPorClasse.DESCINTIMAS
    }
]