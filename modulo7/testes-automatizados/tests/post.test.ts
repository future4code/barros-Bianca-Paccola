import { BaseDatabase } from "../src/data/BaseDatabase";
import { PostDatabase } from "../src/data/PostDatabase";
import { createPost } from "../src/functionsPost/functions";
import { postInputDTO, POST_TYPES } from "../src/model/postDTO";

abstract class TestPostRemove extends BaseDatabase {
  public static async remove(id: string): Promise<void> {
    try {
      await TestPostRemove.connection.where({ id }).delete().into("labook_posts");
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    } finally {
        await BaseDatabase.connection.destroy();
    }
  }
}

describe("Testes para inserir posts na tabela labook_posts do banco de dados", () => {
  const postDatabase = new PostDatabase();
  let id:string;
  test("inserir um post na tabela", async () => {
      const newPost: postInputDTO = {
          photo:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dicio.com.br%2Fpost%2F&psig=AOvVaw1De234mSwUxojBnYt9LG3l&ust=1677729095976000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjMxIjquf0CFQAAAAAdAAAAABAE",
          description: "Este é um post!",
          type: POST_TYPES.NORMAL,
          authorId: "23e09197-0432-4d38-a3d0-41614038924a",
        };
        
    const post: string = await createPost(newPost);
    id = post
    const result = await postDatabase.getPostById(id);

    expect(result).toBeDefined()
    expect(result[0].id).toEqual(id)
});
    afterAll(async () => {
    await TestPostRemove.remove(id);
    });
});
