import { userPurchase } from "../src/functionsClients/functions"
import { userDto, userInputPurchaseDTO } from "../src/model/userDTO"

describe.skip("Testes do usuário", () => {

    test("Teste de compra do cliente: saldo igual ao valor da compra, deve zerar o saldo", () => {
        const purchase: userInputPurchaseDTO = {
            user: {
                name: "Bianca Paccola",
                userBalance: 550
            },
            value: 550
        }
        const result: userDto = {
            name: "Bianca Paccola",
            userBalance: 0
        }

        expect(userPurchase(purchase)).toStrictEqual(result)
    })

    test("Teste de compra do cliente com saldo superior ao valor da compra, deve retornar um saldo positivo", () => {
        const purchase:userInputPurchaseDTO = {
            user: {
                name: "Bianca Paccola",
                userBalance: 1000
            },
            value: 550
        }
        const result: userDto = {
            name: "Bianca Paccola",
            userBalance: 450
        }

        expect(userPurchase(purchase)).toStrictEqual(result)
    })

    test("Testando erro caso o saldo seja insuficiente para a compra", () => {
        const purchase: userInputPurchaseDTO = {
            user: {
                name: "Bianca Paccola",
                userBalance: 500
            },
            value: 550
        }
        expect(userPurchase(purchase)).not.toBeDefined()
    })
})
