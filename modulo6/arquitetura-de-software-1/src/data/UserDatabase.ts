import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_USER } from "./tableNames";

export class UserDatabase extends BaseDatabase {
  
  selectUsers = async ():Promise<User[]> => {
    try {
      const results = await BaseDatabase.connection
      .select().into(TABLE_USER)
  
      return results;
  
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);  
    }
  }

  selectUserById = async (userId: string):Promise<User[]> => {
    try {
      const findUser = await BaseDatabase.connection
      .select()
      .from(TABLE_USER)
      .where('id', userId)
      
      return findUser;

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);  
    }
  }

  insertUser = async (user: User):Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .from(TABLE_USER);
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);   
    }
  };


  deleteUser = async (userId:string): Promise<void> => {
    try {
      const findUser = await BaseDatabase.connection
      .select()
      .from(TABLE_USER)
      .where('id', userId)
      


      const results = await BaseDatabase.connection
      .delete()
      .from(TABLE_USER)
      .where('id', userId)

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message); 
    }
  }

}
