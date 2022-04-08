import { Request, Response, Router } from 'express';
import ProductsController from '../controller/productsController';
import Validation from '../middlewares/validation';

const productsRouter = Router();
const productsController = new ProductsController();
const validation = new Validation();

productsRouter.get('/', async (req: Request, res: Response) =>
  productsController.getAll(req, res));
productsRouter.post(
  '/',
  validation.nameValidation,
  validation.amountValidation,
  async (req: Request, res: Response) => productsController.create(req, res),
);

export default productsRouter;
