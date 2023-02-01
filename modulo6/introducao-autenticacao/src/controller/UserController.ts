import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

    public login = async (req: Request, res: Response) => {
      try {
        const email = req.body.email;
        const password = req.body.password as string;

        const input: LoginInputDTO = {
          email,
          password
        }

        const userBusiness = new UserBusiness()
        const token = await userBusiness.login(input)

        res.status(200).send({token})

      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
    
          res.status(201).send({ message: "Usuário criado!", token: token });

        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public editUser = async (req: Request, res: Response) => {
        try {

          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
