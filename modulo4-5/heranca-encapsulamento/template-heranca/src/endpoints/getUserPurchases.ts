import { Request, Response } from "express"
import { PurchasesDataBase } from "../database/PurchasesDatabase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id;

        res.status(200).send({ purchases: await PurchasesDataBase.getPurchasesByUser(id) });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
}