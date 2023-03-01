import { PostDatabase } from "../data/PostDatabase";
import { postDTO, postInputDTO } from "../model/postDTO";
import { v4 } from "uuid";

export const createPost = async(input: postInputDTO) => {
    try {
        const generateId = v4();
        const newPost = {
            id: generateId,
            photo: input.photo,
            description: input.description,
            type: input.type,
            authorId: input.authorId
        }
        const postDatabase = new PostDatabase();
        await postDatabase.insertPost(newPost)

        return newPost.id
    } catch (error:any) {
        throw new Error(error.message || error.sqlMessage);
    }
}