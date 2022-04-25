import { Request, Response, Router } from 'express';
import OrdersController from '../controller/ordersController';
import Validation from '../middlewares/validation';

const ordersRouter = Router();
const ordersController = new OrdersController();
const validation = new Validation();

// Requisito 04 - Crie um endpoint para listar todos os pedidos
ordersRouter.get('/', async (req: Request, res: Response) =>
  ordersController.getAll(req, res));

// Requisito 06 - Crie um endpoint para o cadastro de um pedido
ordersRouter.post(
  '/', 
  validation.tokenValidation,
  validation.productValidation,
  async (req: Request, res: Response) =>
    ordersController.create(req, res),
);

export default ordersRouter;
