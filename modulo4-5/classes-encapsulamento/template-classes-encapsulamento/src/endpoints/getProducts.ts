import { Request, Response } from "express"
import { ProductDB } from "../class/ProductDB"
import connection from "../database/connection"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productDB = new ProductDB(connection)
        
        res.status(200).send({products: await productDB.getProduct()})
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}