export type Prato = {
    nome: string,
    custo: number,
    valorVenda: number,
    ingredientes: string[]
}

export const pratos: Prato[] = [
    {
        nome: "Strogonoff de Frango",
        custo: 27.50,
        valorVenda: 35.90,
        ingredientes: [
            "frango",
            "arroz",
            "creme de leite",
            "catchup",
            "mostarda",
            "bata palha"
        ]
    },
    {
        nome: "Mousse de Chocolate",
        custo: 19.75,
        valorVenda: 25.90,
        ingredientes: [
            "chocolate meio amargo",
            "creme de leite",
            "leite condensado",
        ]
    },
    {
        nome: "Risoto Queijo",
        custo: 37.50,
        valorVenda: 59.90,
        ingredientes: [
            "arroz",
            "creme de leite",
            "queijo parmesão",
            "queijo gorgonzola",
            "caldo de legumes"
        ]
    },
    {
        nome: "Camarão da Moranga",
        custo: 60.80,
        valorVenda: 89.90,
        ingredientes: [
            "abóbora",
            "camarão",
            "palmito",
            "cheiro-verde",
            "caldo de camarão"
        ]
    },
    {
        nome: "Torta Holandesa Fatia",
        custo: 8.80,
        valorVenda: 14.90,
        ingredientes: [
            "nata",
            "biscoito de chocolate",
            "creme de leite",
            "chocolate meio amargo",
        ]
    },
    {
        nome: "Salmão Grelhado",
        custo: 50.00,
        valorVenda: 78.90,
        ingredientes: [
            "salmão",
            "alcaparras",
            "brócolis",
            "cenoura",
            "manteiga"
        ]
    },
    {
        nome: "Yakisoba",
        custo: 33.00,
        valorVenda: 45.90,
        ingredientes: [
            "lamén",
            "couve-flor",
            "brócolis",
            "cenoura",
            "coxão mole",
            "frango",
            "molho shoyo"
        ]
    },
    {
        nome: "Salada Completa",
        custo: 15.30,
        valorVenda: 21.90,
        ingredientes: [
            "alface",
            "tomate",
            "rúcula",
            "torradinhas",
            "cebola roxa",
            "palmito"
        ]
    },


]    