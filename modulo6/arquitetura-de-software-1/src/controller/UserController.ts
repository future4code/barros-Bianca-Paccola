import {Request, Response} from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { User } from '../types/User';

export class UserController {
    
    createUser = async(req: Request, res: Response):Promise<void> => {
        try {
            const user: User = {
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password.toString()
            };

            const userBusiness = new UserBusiness();
            await userBusiness.createUser(user)

            res.status(201).send({message: "Usuário inserido na base de dados!"})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}