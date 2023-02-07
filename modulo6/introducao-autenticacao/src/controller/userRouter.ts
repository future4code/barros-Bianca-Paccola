import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/user/profile', userController.getUser)
userRouter.post('/user/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.put('/edit',userController.editUser )
