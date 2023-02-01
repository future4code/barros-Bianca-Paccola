import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/user/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.put('/edit',userController.editUser )
