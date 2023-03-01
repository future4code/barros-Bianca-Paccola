import { userPurchase } from "../src/functions"
import { userDto, userInputPurchaseDTO } from "../src/model/userDTO"

describe("Testes do usuário", () => {
    const userPurchaseTest:userInputPurchaseDTO = {
        user: {
            name: "Bianca Paccola",
            userBalance: 550
        },
        value: 550
    }
    const responsePurchase:userDto = {
        name: userPurchaseTest.user.name,
        userBalance: userPurchaseTest.user.userBalance - userPurchaseTest.value
    }

    test("Teste de compra do cliente", () => {
        expect(userPurchase(userPurchaseTest)).toStrictEqual(responsePurchase)
    })
})

describe("Teste de erros do usuário", () => {
    const userPurchaseTest:userInputPurchaseDTO = {
        user: {
            name: "Bianca Paccola",
            userBalance: 500
        },
        value: 550
    }
    test("Testando erro caso o saldo seja insuficiente para a compra", () => {
        expect(userPurchase(userPurchaseTest)).toBe(undefined)
    })
})