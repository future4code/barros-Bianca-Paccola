import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { userDTO } from "../model/userDTO";

const userDatabase = new UserDatabase();

export class UserBusiness {

    public async getUserById (id: string): Promise<userDTO> {
        try {
            const result = await userDatabase.getUserById(id) 
            if (!result) {
                throw new CustomError(404, "User not found")
            }
            return result;
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}