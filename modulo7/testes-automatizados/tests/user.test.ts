import { userPurchase } from "../src/functions"
import { userDto, userInputPurchaseDTO } from "../src/model/userDTO"

describe("Testes do usuário", () => {

    test("Teste de compra do cliente", () => {
        expect(userPurchase({
            user: {
                name: "Bianca Paccola",
                userBalance: 550
            },
            value: 550
        })).toStrictEqual({
            name: "Bianca Paccola",
            userBalance: 0
        })
    })

    test("Teste de compra do cliente", () => {
        expect(userPurchase({
            user: {
                name: "Bianca Paccola",
                userBalance: 1000
            },
            value: 550
        })).toStrictEqual({
            name: "Bianca Paccola",
            userBalance: 450
        })
    })
})

describe("Teste de erros do usuário", () => {

    test("Testando erro caso o saldo seja insuficiente para a compra", () => {
        expect(userPurchase({
            user: {
                name: "Bianca Paccola",
                userBalance: 500
            },
            value: 550
        })).toBe(undefined)
    })
})