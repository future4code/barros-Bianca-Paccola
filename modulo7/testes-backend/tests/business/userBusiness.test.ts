import { UserBusiness } from "../../src/business/UserBusiness";
import { CustomError } from "../../src/error/CustomError";
import { userDatabaseMock } from "../mocks/userDatabaseMock";
import { userMock } from "../mocks/userMock";

describe("Tests for user", () => {
    const userBusiness = new UserBusiness(new userDatabaseMock());

    test("Should catch error when id is not registered", async () => {
        expect.assertions(4)
        try {
            const result = await userBusiness.getUserById('123456')
        } catch (error:any) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(CustomError)
            expect(error.message).toBe('User not found')
            expect(error.statusCode).toBe(404)
        }
    })

    test("Should return respective user when id is registered", async () => {
        const result = await userBusiness.getUserById('555666')
        expect(result).toEqual(userMock)
    })
})