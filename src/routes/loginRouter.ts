import { Request, Response, Router } from 'express';
import LoginController from '../controller/loginController';

const loginRouter = Router();
const loginController = new LoginController();

// Requisito 05 - Crie um endpoint para o login de pessoas usuárias
loginRouter.get('/', async (req: Request, res: Response) =>
  loginController.getAll(req, res));

export default loginRouter;
