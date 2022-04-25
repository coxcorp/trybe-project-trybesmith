import { Request, Response } from 'express';
import OrdersServices from '../services/ordersServices';

export default class OrdersController {
  private OrdersServices: OrdersServices = new OrdersServices();

  // Requisito 04 - Crie um endpoint para listar todos os pedidos
  public async getAll(req: Request, res: Response) {
    const result = await this.OrdersServices.getAll();
    return res.status(200).json(result);
  }

  // Requisito 06 - Crie um endpoint para o cadastro de um pedido
  public async create(req: Request, res: Response) {
    const token = req.headers.authorization;
    if (token) {
      const newOrder = await this.OrdersServices.create(req.body, token);
      return res.status(201).json(newOrder);
    }
    return res.status(401).json({ error: 'Token not found' });
  }
}
