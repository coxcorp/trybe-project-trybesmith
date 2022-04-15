import { Request, Response, Router } from 'express';
import OrdersController from '../controller/ordersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

// Requisito 04 - Crie um endpoint para listar todos os pedidos
ordersRouter.get('/', async (req: Request, res: Response) =>
  ordersController.getAll(req, res));

export default ordersRouter;
