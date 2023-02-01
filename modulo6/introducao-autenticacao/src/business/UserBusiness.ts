import { UserDatabase } from "../data/UserDatabase";
import {IdGenerator} from "../services/IdGenerator"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

  public login = async (input: LoginInputDTO) => {
    try {
      const {email, password} = input;
      if (!email || !password) {
        throw new CustomError(
          422, 
          "Necessita email e senha validos."
          )
      }

      if (password.length < 6) {
        throw new CustomError(
          422,
          "Senha precisa ter no mínimo 6 caracteres."
        )
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase()
      const user = await userDatabase.findByEmail(email)

      if (!user) {
        throw new UserNotFound()
      }

      if(user.password !== password) {
        throw new InvalidPassword()
      }

      const token = Authenticator.generateToken({id: user.id})
      return token;
      
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  }

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
      const { name, nickname, token } = input;

      if (!name || !nickname) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const {id} = Authenticator.getToken(token)
      // OU const id = Authenticator.getToken(token).id

      console.log(token)

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
