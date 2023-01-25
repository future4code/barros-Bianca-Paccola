import { MovieDataInsertDTO } from "../model/movieDTO";
import { BaseDatabase } from "./BaseDatabase";
export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(movie: MovieDataInsertDTO): Promise<void> {
    await BaseDatabase.connection
      .insert( movie )
      .into(MovieDatabase.TABLE_NAME);
  }

  async getAll(): Promise<MovieDataInsertDTO[]> {
    return await BaseDatabase.connection
      .select()
      .into(MovieDatabase.TABLE_NAME);
  }
  
}
