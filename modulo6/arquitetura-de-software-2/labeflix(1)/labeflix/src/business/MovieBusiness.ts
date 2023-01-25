import { MovieDatabase } from "../data/MovieDatabase";
import { MovieDataInsertDTO, MovieInputDTO } from "../model/movieDTO";
import { generateId } from "../services/idGenerator";

export class MovieBusiness {
  async create(movie: MovieInputDTO): Promise<void> {
    try {
      if (
        !movie.title ||
        !movie.description ||
        !movie.durationInMinutes ||
        !movie.yearOfRelease
      ) {
        throw new Error("Dados incompletos.");
      }

      const id = generateId()

      const userInsert: MovieDataInsertDTO = {
        id: id,
        title: movie.title,
        description: movie.description,
        duration_in_minutes: movie.durationInMinutes,
        year_of_release: movie.yearOfRelease,
      };

      const movieDatabase = new MovieDatabase();
      await movieDatabase.create(userInsert);

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getAll(): Promise<MovieDataInsertDTO[]> {
    try {
      return await new MovieDatabase().getAll();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
