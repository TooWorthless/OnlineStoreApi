import express from 'express';
import authController from '../controllers/auth.controller.js';
import { validateMiddleware } from '../middlewares/validate.middleware.js';
import { userSchema } from '../../mongo/schemas/validationSchemas/validationSchemas.js';


const authRouter = express.Router();


authRouter.post('/register', validateMiddleware(userSchema), authController.register);
authRouter.post('/login', validateMiddleware(userSchema), authController.login);


export default authRouter;