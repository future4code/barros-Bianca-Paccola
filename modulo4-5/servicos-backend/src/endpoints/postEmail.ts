import {Request, Response} from "express";
import sendNodemailerfrom from "../services/sendNodemailer";

async function postEmail (req: Request, res: Response) {
    try{
        await sendNodemailerfrom();
        res.status(201).send("Email enviado com sucesso!");
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}

export default postEmail;