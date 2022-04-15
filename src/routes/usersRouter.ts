import { Request, Response, NextFunction, Router } from 'express';
import UsersController from '../controller/usersController';
import Validation from '../middlewares/validation';

const usersRouter = Router();
const usersController = new UsersController();
const validation = new Validation();

// Requisito 03 - Crie um endpoint para o cadastro de pessoas usuárias
usersRouter.post(
  '/',
  validation.usernameValidation,
  validation.classeValidation,
  validation.levelValidation,
  validation.passwordValidation,
  async (req: Request, res: Response, next: NextFunction) => usersController.create(req, res, next),
);

export default usersRouter;
