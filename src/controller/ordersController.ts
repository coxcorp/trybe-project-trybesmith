import { Request, Response } from 'express';
import OrdersServices from '../services/ordersServices';

export default class OrdersController {
  private OrdersServices: OrdersServices = new OrdersServices();

  // Requisito 04 - Crie um endpoint para listar todos os pedidos
  public async getAll(req: Request, res: Response) {
    const result = await this.OrdersServices.getAll();
    return res.status(200).json(result);
  }
}
