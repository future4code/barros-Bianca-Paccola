import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public getUser = async (id: string) => {
    try {
      const result = await UserDatabase.connection
      .select()
      .where({ id })
      .into("Auth_users");
      
      return result[0]

    } catch (error:any) {
      throw new CustomError(400, error.message || error.sqlMessage);
    }
  } 

  public findByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection
      .select()
      .where({ email })
      .into("Auth_users");
      
      return result[0]

    } catch (error:any) {
      throw new CustomError(400, error.message || error.sqlMessage);
    }
  }

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
