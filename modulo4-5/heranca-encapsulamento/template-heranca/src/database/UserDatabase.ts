import { BaseDatabase } from "./BaseDatabase";
import {TABLE_USERS} from "./tableNames";

export class UserDatabase extends BaseDatabase {

   public static async getAllUsers () {
    const result = await BaseDatabase.connection(TABLE_USERS).select()
    return result;
   }
   
   public static async createUser (id: string, email: string, password: string) {
    await BaseDatabase.connection(TABLE_USERS).insert({id, email, password})
   }

   public static async getUserById (id: string) {
    const result = await BaseDatabase.connection(TABLE_USERS).where('id', id).select();
    return result;
   }
}