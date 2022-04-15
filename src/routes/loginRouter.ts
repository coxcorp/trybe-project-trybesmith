import { Request, Response, NextFunction, Router } from 'express';
import LoginController from '../controller/loginController';
import Validation from '../middlewares/validation';

const loginRouter = Router();
const loginController = new LoginController();
const validation = new Validation();

// Requisito 05 - Crie um endpoint para o login de pessoas usuárias
loginRouter.post(
  '/',
  validation.usernameValidation,
  validation.passwordValidation,
  async (req: Request, res:Response, next: NextFunction) => loginController.login(req, res, next),
);

export default loginRouter;
