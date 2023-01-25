import { CustomError } from "../error/customError";
import { MovieDataInsertDTO } from "../model/movieDTO";
import { BaseDatabase } from "./BaseDatabase";
export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(movie: MovieDataInsertDTO): Promise<void> {
    try {
      await BaseDatabase.connection
        .insert( movie )
        .into(MovieDatabase.TABLE_NAME);
      
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  async getAll(): Promise<MovieDataInsertDTO[]> {
    try {
      return await BaseDatabase.connection
        .select()
        .into(MovieDatabase.TABLE_NAME);
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
  
}
