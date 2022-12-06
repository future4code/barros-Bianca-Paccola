import { Request, Response } from "express"
import { PurchaseDB } from "../class/PurchaseDB"
import connection from "../database/connection"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchaseDB = new PurchaseDB(connection)

        res.status(200).send({ purchases: await purchaseDB.getPurchases(id) })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}