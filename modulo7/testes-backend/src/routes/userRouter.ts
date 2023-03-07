import express from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { UserController } from '../controller/UserController';
import { UserDatabase } from '../data/UserDatabase';

export const userRouter = express.Router();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userContoller = new UserController(userBusiness)

userRouter.get("/profile/:id", (req, res) => userContoller.getUserById(req, res))
userRouter.get("/all", (req, res) =>userContoller.getAllUsers(req, res))