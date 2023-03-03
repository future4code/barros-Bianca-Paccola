import { BaseDatabase } from "../src/data/BaseDatabase";
import { createPost } from "../src/functionsPost/functions";
import { POST_TYPES } from "../src/model/postDTO";
import { v4 } from "uuid";

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
  const generateId = v4();
          const newPost = {
            id: generateId,
            photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dicio.com.br%2Fpost%2F&psig=AOvVaw1De234mSwUxojBnYt9LG3l&ust=1677729095976000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjMxIjquf0CFQAAAAAdAAAAABAE",
            description: "Este é um post!",
            type: POST_TYPES.NORMAL,
            authorId: "23e09197-0432-4d38-a3d0-41614038924a"
        }
  test.skip("inserir um post na tabela", async () => {
    const result = await createPost(newPost)
    expect(result).toBeDefined()
    expect(result).toEqual("Usuário criado com sucesso!")
});
  test("Testando repetir a inserção do mesmo post inserido antes, não deve ser possível inserir outro post com o mesmo id.", async () => {
    try {
      expect.assertions(2)
      await createPost(newPost)
      await createPost(newPost)
    } catch (error:any) {
      expect(error).toBeDefined()
      expect(error).toBeInstanceOf(Error)
    }
  })
    afterAll(async () => {
    await TestPostRemove.remove(newPost.id);
    });
});
