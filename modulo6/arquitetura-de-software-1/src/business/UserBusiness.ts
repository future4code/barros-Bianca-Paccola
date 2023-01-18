import { UserDatabase } from "../data/UserDatabase";
import { checkTypeString } from "../functions/checkType";
import { User } from "../types/User";

export class UserBusiness {
    createUser = async (user: User): Promise<void> => {
        try {
            const {id, name, email, password} = user;
            const checkTypes = checkTypeString(user)

            if(!name || !email || !password) {
                throw new Error("Precisa informar: nome, email e password");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Email inválido");
            }

            if (checkTypes === false) {
                throw new Error("Precisa passar os valores em formato string");   
            }

            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(user)
            
        } catch (error: any) {
            throw new Error(error.message || "Erro ao inserir usuário na base de dados. Por favor check as informações.");
        }
    }

    getAllUsers = async ():Promise<void> => {
        try {
            const userDatabase = new UserDatabase();
            const allUsers = await userDatabase.selectUsers();

            return allUsers;

        } catch (error:any) {
            throw new Error(error.message || "Erro ao buscar os usuários. Tente atualizar a página.");
        }

    }
}