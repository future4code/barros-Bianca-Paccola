import express from 'express';
import { UserController } from '../controller/UserController';

export const userRouter = express.Router();

const userContoller = new UserController()

userRouter.get("/profile/:id", userContoller.getUserById)