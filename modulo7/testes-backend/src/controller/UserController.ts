import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";

const userBusiness = new UserBusiness();

export class UserController {

    public async getUserById(req: Request, res: Response):Promise<void> {
        try {
            const id = req.params.id as string;
            const result = await userBusiness.getUserById(id)
            res.status(200).send({result})
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }
}