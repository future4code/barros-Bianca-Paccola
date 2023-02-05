import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { CustomError } from "../error/customError";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
    
    async create (req: Request, res: Response): Promise<void> {
        try {
            
            const {title, description, durationInMinutes, yearOfRelease}:MovieInputDTO = req.body;
    
            const movieBusiness = new MovieBusiness()
    
            await movieBusiness.create({title, description, durationInMinutes, yearOfRelease})
    
            res.status(201).send({message: "Filme cadastrado com sucesso!"})
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    async getAll (req: Request, res: Response):Promise<void> {
        try {
            res.status(200).send(await new MovieBusiness().getAll());
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    } 
}