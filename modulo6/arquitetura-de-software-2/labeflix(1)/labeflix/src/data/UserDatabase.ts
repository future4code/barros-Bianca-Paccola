import { UserDataInsertDTO } from "../model/userDTO";
import { User } from "../class/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(user: UserDataInsertDTO): Promise<void> {
    await UserDatabase.connection
      .insert(user)
      .into(UserDatabase.TABLE_NAME);
  }

  async getAll():Promise<UserDataInsertDTO[]> {
   return await UserDatabase.connection.select().into(UserDatabase.TABLE_NAME)
  }
}
