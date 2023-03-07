import { CustomError } from "../error/CustomError";
import { userDTO } from "../model/userDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = 'User_Arq_testes'

    public async getUserById (id: string): Promise<userDTO> {
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
}