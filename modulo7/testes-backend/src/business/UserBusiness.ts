import { CustomError } from "../error/CustomError";
import { User } from "../model/User";
import { UserRepository } from "./UseRepository";

export class UserBusiness {
    constructor(private userDatabase: UserRepository) {}

    public async getUserById (id: string): Promise<User | undefined> {
        try {
            const result = await this.userDatabase.getUserById(id) 
            if (!result) {
                throw new CustomError(404, "User not found")
            }
            return result;
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}