import express from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { MovieController } from '../controller/MovieController'

export const movieRouter = express.Router()

const movieController = new MovieController()


movieRouter.post('/create', movieController.create)
movieRouter.get('/movie', movieController.getAll)