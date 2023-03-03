import { PostDatabase } from "../data/PostDatabase";
import { postDTO } from "../model/postDTO";

export const createPost = async(newPost: postDTO) => {
    try {
        const postDatabase = new PostDatabase();
        await postDatabase.insertPost(newPost)
        return "Usuário criado com sucesso!"
    } catch (error:any) {
        throw new Error(error.message || error.sqlMessage);
    }
}