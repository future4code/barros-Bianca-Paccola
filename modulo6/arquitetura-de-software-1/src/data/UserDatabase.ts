import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_USER } from "./tableNames";

export class UserDatabase extends BaseDatabase {

  insertUser = async (user: User):Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(TABLE_USER);
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);   
    }
  };

  selectUsers = async ():Promise<any> => {
    try {
      const allUsers = await BaseDatabase.connection
      .select().into(TABLE_USER)

      return allUsers;

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);  
    }
  }

}
