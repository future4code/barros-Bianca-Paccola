import { UserBusiness } from "../../src/business/UserBusiness";
import { CustomError } from "../../src/error/CustomError";
import { userDatabaseMock } from "../mocks/userDatabaseMock";
import { userMock } from "../mocks/userMock";

describe("Tests for get an user", () => {
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
        const getUserById = jest.fn(
            (id: string) => userBusiness.getUserById(id)
          )
        const result = await getUserById('555666')
        expect(result).toEqual(userMock)
        expect(getUserById).toHaveBeenCalledTimes(1)
        expect(getUserById).toHaveBeenCalledWith("555666")
    })

    test("Should return all users for amdin user", async () => {
        const result = await userBusiness.getAllUsers('ADMIN')
        expect(result).toEqual([userMock])
    })

        test("Should error to not admin user", async () => {
        expect.assertions(4)
        try {
            const result = await userBusiness.getAllUsers('NORMAL')
        } catch (error:any) {
            expect(error).toBeDefined()
            expect(error).toBeInstanceOf(CustomError)
            expect(error.message).toBe('You must be an admin to access this endpoint')
            expect(error.statusCode).toBe(401)
        }
    })
})