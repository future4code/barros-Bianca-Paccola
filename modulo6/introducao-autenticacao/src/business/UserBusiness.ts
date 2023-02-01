import { UserDatabase } from "../data/UserDatabase";
import {IdGenerator} from "../services/IdGenerator"
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (password.length < 6) {
        throw new CustomError(
          422,
          "Senha precisa ter no mínimo 6 caracteres."
        )
        
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = IdGenerator.generateId();

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);
      
      //gerando token de autenticação
      const token = Authenticator.generateToken({id})
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
