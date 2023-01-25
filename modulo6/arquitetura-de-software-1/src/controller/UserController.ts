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

    getAllUsers = async (req: Request, res: Response):Promise<void> => {
        try {
            const userBusiness = new UserBusiness()
            const results = await userBusiness.getAllUsers()
    
            res.status(200).send({users: results})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    deleteUser = async (req: Request, res: Response):Promise<void> => {
        try {
            const userId: string = req.params.id;

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUSer(userId)

            res.status(201).send({message: "Usuário excluído com sucesso!"});
        } catch (error:any) {
            res.status(401).send(error.message)
        }
    }
}