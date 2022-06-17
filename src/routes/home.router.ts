import express from 'express'
import { home } from '../controllers/hoom.controller.js'

const homeRouter = express.Router();

homeRouter.get('/', home);

export default homeRouter;