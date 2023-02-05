import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { IncompleteData } from "../error/UserErros";
import { UserDataInsertDTO, UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";

export class UserBusiness {

  async create(user: UserInputDTO): Promise<void> {
    try {
      if (!user.email || !user.name || !user.password) {
        throw new IncompleteData;
      }
  
      const id = generateId();
      const userDatabase = new UserDatabase();
      const userInsert: UserDataInsertDTO = {
        id: id,
        name: user.name,
        email: user.email,
        password: user.password,
      };
  
      await userDatabase.create(userInsert);
      
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  async getAll(): Promise<UserDataInsertDTO[]> {
    try {
      return await new UserDatabase().getAll();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }
}
