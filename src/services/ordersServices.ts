import { IOrder } from '../interfaces/ordersInterfaces';
import OrdersModel from '../models/ordersModel';
import connection from '../models/connection';

export default class OrdersServices {
  private OrdersModel: OrdersModel;

  constructor() {
    this.OrdersModel = new OrdersModel(connection);
  }

  // Requisito 04 - Crie um endpoint para listar todos os pedidos
  public async getAll(): Promise<IOrder[]> {
    const result = await this.OrdersModel.getAll();

    return result;
  }
}