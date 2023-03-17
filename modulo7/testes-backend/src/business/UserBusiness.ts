import { CustomError } from "../error/CustomError";
import { ROLE, User } from "../model/User";
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

    public async getAllUsers(role: string): Promise<User[]> {
        try {
            if(role !== ROLE.ADMIN) {
                throw new CustomError(401, "You must be an admin to access this endpoint")
            }  
            const result = await this.userDatabase.getAllUsers()
            
            return result;
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}