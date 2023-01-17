import { Request, Response } from "express"
import { UserDB } from "../class/UserDB"
import connection from "../database/connection"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userDB = new UserDB(connection)

        res.status(200).send({ users: await userDB.getUsers() })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}