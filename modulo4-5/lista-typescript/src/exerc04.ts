// Crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

enum DEPARTMENTS {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type Employee = {
    name: string,
    salary: number,
    department: DEPARTMENTS,
    presential: boolean
}

let staff = [
    { name: "Marcos", salary: 2500, department: DEPARTMENTS.MARKETING, presential: true },
    { name: "Maria" ,salary: 1500, department: DEPARTMENTS.VENDAS, presential: false},
    { name: "Salete" ,salary: 2200, department: DEPARTMENTS.FINANCEIRO, presential: true},
    { name: "João" ,salary: 2800, department: DEPARTMENTS.MARKETING, presential: false},
    { name: "Josué" ,salary: 5500, department: DEPARTMENTS.FINANCEIRO, presential: true},
    { name: "Natalia" ,salary: 4700, department: DEPARTMENTS.VENDAS, presential: true},
    { name: "Paola" ,salary: 3500, department: DEPARTMENTS.MARKETING, presential: true }
]

function getMarketingPresential (array: Employee[]) : Employee[] {
    return array.filter((people)=>{
        return people.department === DEPARTMENTS.MARKETING && people.presential === true;
    })
}

console.log(getMarketingPresential(staff))