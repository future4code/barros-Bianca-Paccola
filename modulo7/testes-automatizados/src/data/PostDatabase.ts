import { postDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "labook_posts"
  async insertPost(input: postDTO): Promise<void> {
    try {
      await PostDatabase.connection
            .insert({
                id: input.id,
                photo: input.photo,
                description: input.description,
                type: input.type,
                author_id: input.authorId
            })
            .into(PostDatabase.TABLE_NAME)
      
    } catch (error:any) {
      throw new Error(error.message || error.sqlMessage);
      
    }
  }

  async getPostById(id: string): Promise<postDTO[]> {
    try {
      const result = await PostDatabase.connection
      .select("*")
      .where({ id })
      .into(PostDatabase.TABLE_NAME)
      
      return result;
      
    } catch (error:any) {
      throw new Error(error.message || error.sqlMessage);
    }
  }

  // async removePost(id:string) {
  //   try {
  //     await PostDatabase.connection.del().where({id}).into(PostDatabase.TABLE_NAME)    
  //   } catch (error:any) {
  //     throw new Error(error.message || error.sqlMessage);
  //   }
  // }

  // async destroyConnection () {
  //   try {
  //     await BaseDatabase.connection.destroy();
  //   } catch (error:any) {
  //     throw new Error(error.message || error.sqlMessage);
  //   }
  // }
}
