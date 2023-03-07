import { UserRepository } from "../business/UseRepository";
import { CustomError } from "../error/CustomError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
    private static TABLE_NAME = 'User_Arq_testes'

    public async getUserById (id: string): Promise<User | undefined> {
        try {
            const result = await BaseDatabase.connection
            .select('*')
            .where({id})
            .into(UserDatabase.TABLE_NAME)

            return result[0];     
        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage);  
        }
    }

    public async getAllUsers (): Promise<User[]> {
        try {
            const result = await BaseDatabase.connection
            .select('*')
            .into(UserDatabase.TABLE_NAME)
    
            return result;
        } catch (error:any) {
            throw new CustomError(400, error.message || error.sqlMessage);  
        }
    }
}