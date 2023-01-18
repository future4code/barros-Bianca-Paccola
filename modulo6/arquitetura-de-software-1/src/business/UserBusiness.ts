import { UserDatabase } from "../data/UserDatabase";
import { checkTypeString } from "../functions/checkType";
import { User } from "../types/User";

export class UserBusiness {

    getAllUsers = async ():Promise<User[]> => {
        try {
    
            return await new UserDatabase().selectUsers();
    
        } catch (error:any) {
            throw new Error(error.message || "Erro ao buscar os usuários. Tente atualizar a página.");
        }
    
    }

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

    deleteUSer = async (userId: string) => {
        
        try {
            const userDatabase = new UserDatabase()
            const findUser = await userDatabase.selectUserById(userId)

            if( findUser.length === 0) {
                throw new Error("Usuário não encontrado na base de dados!");
            }

            await userDatabase.deleteUser(userId)
            
        } catch (error:any) {
            throw new Error(error.message || "Problemas ao deletar usuário da base de dados. Procure o administrador.");
        }

    }

}