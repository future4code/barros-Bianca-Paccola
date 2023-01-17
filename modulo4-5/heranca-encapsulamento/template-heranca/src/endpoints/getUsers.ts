import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    const userId = req.query.id as string;
    try {
        if (userId) {
            res.status(200).send({ users: await UserDatabase.getUserById(userId) })
        } else {
            res.status(200).send({ users: await UserDatabase.getAllUsers() })
        }
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}