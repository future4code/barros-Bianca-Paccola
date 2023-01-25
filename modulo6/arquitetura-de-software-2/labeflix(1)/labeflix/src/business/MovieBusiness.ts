import { MovieDatabase } from "../data/MovieDatabase";
import { Movie } from "../types/Movie";
import { v4 as generateId } from 'uuid'

export class MovieBusiness {

    async create (title:string,
         description:string, durationInMinutes:number, yearOfRelease:number):Promise<void> {
            try {
                
                if (!title || !description || !durationInMinutes || !yearOfRelease) {
                    throw new Error("Dados incompletos.");
                }

                const id = generateId()

                const movieDatabase = new MovieDatabase()
                await movieDatabase.create(
                    id,
                    title,
                    description,
                    durationInMinutes,
                    yearOfRelease
                )
            } catch (error: any) {
                throw new Error(error.message);
            }
         }

        async getAll ():Promise<Movie[]> {
            try {
                return await new MovieDatabase().getAll();
            } catch (error:any) {
                throw new Error(error.message);
            }
        }
}