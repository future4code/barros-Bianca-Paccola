import { UserDatabase } from "../data/UserDatabase";
import { UserDataInsertDTO, UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";

export class UserBusiness {
  async create(user: UserInputDTO): Promise<void> {
    if (!user.email || !user.name || !user.password) {
      throw new Error("Dados inválidos (email, name, password)");
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
  }

  async getAll(): Promise<UserDataInsertDTO[]> {
    try {
      return await new UserDatabase().getAll();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
