import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password }:UserInputDTO = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  async getAll (req: Request, res: Response):Promise<void> {
    try {
      res.status(200).send(await new UserBusiness().getAll())
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
}
