import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(private userBusiness: UserBusiness) {}

    public async getUserById(req: Request, res: Response):Promise<void> {
        try {
            const id = req.params.id as string;
            const result = await this.userBusiness.getUserById(id)
            res.status(200).send({result})
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const role = req.query.role as string;
            const result = await this.userBusiness.getAllUsers(role)
            res.status(200).send({result})
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }
}