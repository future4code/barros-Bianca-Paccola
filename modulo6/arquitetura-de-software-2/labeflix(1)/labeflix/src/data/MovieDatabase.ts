import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
private static TABLE_NAME = "LABEFLIX_MOVIE";

    async create(
        id: string, 
        title: string, 
        description: string, 
        durationInMinutes: number, 
        yearOfRelease: number):Promise<void> {
            await BaseDatabase.connection
            .insert({
                id: id,
                title: title,
                description: description,
                duration_in_minutes: durationInMinutes,
                year_of_release: yearOfRelease
            })
            .into(MovieDatabase.TABLE_NAME);
        }
    
        async getAll ():Promise<Movie[]> {
            return await BaseDatabase.connection
            .select()
            .into(MovieDatabase.TABLE_NAME)
        }
}