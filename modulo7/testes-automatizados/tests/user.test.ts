import { userPurchase } from "../src/functions"
import { userDto, userInputPurchaseDTO } from "../src/model/userDTO"

describe("Testes do usuário", () => {
    const userPurchaseTest:userInputPurchaseDTO = {
        user: {
            name: "Bianca Paccola",
            userBalance: 1000
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