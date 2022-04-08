import { Request, Response } from 'express';
import ProductsServices from '../services/productsServices';

export default class ProductsController {
  private ProductsServices: ProductsServices = new ProductsServices();

  // Requisito 01 - Crie um endpoint para a listagem de produtos
  public async getAll(req: Request, res: Response) {
    const result = await this.ProductsServices.getAll();
    res.status(200).json(result);
  }

  // Requisito 02 - Crie um endpoint para o cadastro de produtos
  public async create(req: Request, res: Response) {
    const result = await this.ProductsServices.create(req.body);
    return res.status(201).json({ item: result });
  }
}
