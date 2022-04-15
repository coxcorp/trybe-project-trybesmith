import { Request, Response, Router } from 'express';
import ProductsController from '../controller/productsController';
import Validation from '../middlewares/validation';

const productsRouter = Router();
const productsController = new ProductsController();
const validation = new Validation();

// Requisito 01 - Crie um endpoint para a listagem de produtos
productsRouter.get('/', async (req: Request, res: Response) =>
  productsController.getAll(req, res));
// Requisito 02 - Crie um endpoint para o cadastro de produtos
productsRouter.post(
  '/',
  validation.nameValidation,
  validation.amountValidation,
  async (req: Request, res: Response) => productsController.create(req, res),
);

export default productsRouter;
